import { useDispatch } from "react-redux";
import { Delete } from "../app/produtosSlice";

const LinhaProdutos = (produto) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
    let payload = {id:produto.produto.id}
    dispatch(Delete(payload))
    }
    return ( 
        <tr>
            <td>{produto.produto.id}</td>
            <td>{produto.produto.nomeProduto}</td>
            <td>{produto.produto.custoProduto}</td>
            <td>{produto.produto.valorProduto}</td>
            <button onClick={handleDelete} id ='deletar'>Delete</button>
        </tr>
     );
}
 
export default LinhaProdutos;
