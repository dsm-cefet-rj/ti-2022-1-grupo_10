import LinhaProdutos from './LinhaProdutos';

/**
*@module Components/TabelaProdutos
*/

/**
 * Neste componente é renderizado a tabela do produto e passado como parametro para LinhaProdutos os produtos a serem exibidos
 * @param {Produto} props.produtos - produtos a serem exibidos
 */

const TabelaProdutos = (props) => {
    return ( 
        <tbody>
            {props.produtos.map((produto) => <LinhaProdutos key={produto.id} produto={produto} />)}
        </tbody>
    );
}
 
export default TabelaProdutos;