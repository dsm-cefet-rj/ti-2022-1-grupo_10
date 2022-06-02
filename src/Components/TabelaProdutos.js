import LinhaProdutos from './LinhaProdutos';

const TabelaProdutos = (props) => {
    return ( 
        <tbody>
            {props.produtos.map((produto) => <LinhaProdutos key={produto.id} produto={produto} />)}
        </tbody>
    );
}
 
export default TabelaProdutos;