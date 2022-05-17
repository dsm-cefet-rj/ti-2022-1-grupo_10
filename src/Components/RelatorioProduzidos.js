
import React from "react";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};





const RelatorioProduzidos = ({colunas, produtos}) => {
    const { items, requestSort, sortConfig } = useSortableData(produtos);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
        return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    const TopoTabela = ({ item }) => 
    <th>
        <button
            type="button"
            onClick={() => requestSort(item.value)}
            className={getClassNamesFor(item.value)}
            >{item.heading}
        </button>
    </th>
const LinhaTabela = ({ item, colunas }) => (
    <tr>
        {colunas.map((ColunaItem, index) => {
            return <td>{item[`${ColunaItem.value}`]}</td>
        })}
    </tr>
)
    
    
    return (
        <>
            <h1>Mais Produzidos</h1>
            <table class="mais-vendidos">
                <tr>
                    {colunas.map((item, index) => <TopoTabela item={item}/>)}
                </tr>
                <tbody>
                    {items.map((item,index) => <LinhaTabela item ={item} colunas={colunas}/>)}
                </tbody>
            </table>
        </>    
    );

};



export default RelatorioProduzidos;