import { useDispatch } from "react-redux";
import { deleteFornecedoresServer } from "../app/fornecedorSlice";
import { Link } from 'react-router-dom';

/**
*@module Components/LinhaFornecedor
*/

/**
 * Neste componente é exibida as linhas de fcedor do componente Home e renderizado o botão de edição e deleção.
 * @param {Fornecedor} fornecedor.fornecedor - fornecedor a ser exibido
 */

const LinhaFornecedor = (fornecedor) => {

    const dispatch = useDispatch();
    const handleDelete = () => {
    let payload = {id:fornecedor.fornecedor.id}
    dispatch(deleteFornecedoresServer(payload))
    }
    return ( 
        <tr>
            <td><Link to={`/cadastroFornecedor/${fornecedor.fornecedor.id}`}><button>Editar</button></Link></td>
            <td>{fornecedor.fornecedor.nomeFornecedor}</td>
            <td>{fornecedor.fornecedor.estadoFornecedor}</td>
            <td>{fornecedor.fornecedor.bairroFornecedor}</td>
            <td><button onClick={handleDelete} id ='deletar'>Delete</button></td>
        </tr>
     );
}
 
export default LinhaFornecedor;
