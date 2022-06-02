const LinhaMateriaPrima = (mp) => {
    return ( 
        <tr>
            <td>{mp.mp.id}</td>
            <td>{mp.mp.tipo}</td>
            <td>{mp.mp.fornecedor}</td>
            <td>{mp.mp.qtd}</td>
            <td>{mp.mp.custo}</td>
        </tr>
     );
}
 
export default LinhaMateriaPrima;