const TabelaMateriaPrima = () => {
    return ( 
        <tbody>
            {props.produtos.map((produto) => <LinhaProdutos key={produto.id} produto={produto} />)}
        </tbody>
     );
}
 
export default TabelaMateriaPrima;