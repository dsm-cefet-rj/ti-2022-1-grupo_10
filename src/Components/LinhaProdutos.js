import { useDispatch } from "react-redux";
import { deleteProdutoServer } from "../app/produtosSlice";
import { Link } from 'react-router-dom';

const LinhaProdutos = (produto) => {

    const dispatch = useDispatch();
    const handleDelete = () => {
    let payload = {id:produto.produto.id}
    dispatch(deleteProdutoServer(payload))
    }
    return ( 
        <tr>
            <td><Link to={`/cadastroProduto/${produto.produto.id}`}><button>{produto.produto.id}</button></Link></td>
            <td>{produto.produto.nomeProduto}</td>
            <td>{produto.produto.custoProduto}</td>
            <td>{produto.produto.valorProduto}</td>
            <button onClick={handleDelete} id ='deletar'>Delete</button>
        </tr>
     );
}
 
export default LinhaProdutos;
