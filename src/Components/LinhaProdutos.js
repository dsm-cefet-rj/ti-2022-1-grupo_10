import { useDispatch } from "react-redux";
import { deleteProdutoServer } from "../app/produtosSlice";
import { Link } from 'react-router-dom';

/**
*@module Components/LinhaProdutos
*/

/**
 * Neste componente é exibida as linhas de produtos do componente Home e renderizado o botão de edição e deleção.
 * @param {Produto} produto.produto - produto a ser exibido
 */

const LinhaProdutos = (produto) => {

    const dispatch = useDispatch();
    const handleDelete = () => {
    let payload = {id:produto.produto.id}
    dispatch(deleteProdutoServer(payload))
    }
    return ( 
        <tr>
            <td><Link to={`/cadastroProduto/${produto.produto.id}`}><button>Editar</button></Link></td>
            <td>{produto.produto.nomeProduto}</td>
            <td>{produto.produto.custoProduto}</td>
            <td>{produto.produto.valorProduto}</td>
            <td><button onClick={handleDelete} id ='deletar'>Delete</button></td>
        </tr>
     );
}
 
export default LinhaProdutos;
