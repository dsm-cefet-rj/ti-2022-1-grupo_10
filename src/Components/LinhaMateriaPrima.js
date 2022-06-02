const LinhaMateriaPrima = () => {
    return ( 
        <tr>
            <td>{produto.produto.id}</td>
            <td>{produto.produto.nomeProduto}</td>
            <td>{produto.produto.custoProduto}</td>
            <td>{produto.produto.valorProduto}</td>
        </tr>
     );
}
 
export default LinhaMateriaPrima;