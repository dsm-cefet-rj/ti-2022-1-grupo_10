
import React from "react";
import { useSelector } from "react-redux";

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





const RelatorioProduzidos = () => {

    const produtosState = useSelector(state => state.produtos);
    const produtos = produtosState.produtos;
    const statusProdutos = produtosState.status;
    const errorProdutos = produtosState.error;

    const { items, requestSort, sortConfig } = useSortableData(produtos);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
        return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    let tabelaProdutos = '';
    if(statusProdutos === 'loaded'){
        tabelaProdutos = 
        <table class="mais-vendidos">
        <thead> 
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort('nomeProduto')}
                className={getClassNamesFor('nomeProduto')}
              >
              Nome do Produto
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('Produzidos')}
                className={getClassNamesFor('Produzidos')}
              >
              Produzidos
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('qtdProduto')}
                className={getClassNamesFor('qtdProduto')}
              >
              Quantidade
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((items,index) => {
            return (
                <tr key={index}>
                  <td>{items.nomeProduto}</td>
                  <td>{items.Produzidos}</td>
                  <td>{items.qtdProduto}</td>
                </tr>
            )
          })}
        </tbody>
      </table>
            
      }else if(statusProdutos === 'loading'){
        tabelaProdutos = <div>Carregando os Produtos...</div>;
      }else if(statusProdutos === 'failed'){
        tabelaProdutos = <div>Error: {errorProdutos}</div>;
      }
      
     return (
        
      <div id="relatorio">
        <div id="header">
          <h2>Relatórios</h2>
        </div>
          {tabelaProdutos}
        </div>
         
    );

};



export default RelatorioProduzidos;
