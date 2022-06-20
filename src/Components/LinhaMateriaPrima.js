import { useDispatch } from "react-redux";
import { deleteMateriaPrimaServer } from "../app/materiaPrimaSlice";
import { Link } from 'react-router-dom';

/**
*@module Components/LinhaMateriaPrima
*/

/**
 * Neste componente é exibida as linhas de materias primas do componente Home e renderizado o botão de edição e deleção.
 * @param {MateriaPrima} materiaprima.materiaprima - materia prima a ser exibida
 */


const LinhaMateriaPrima = (materiaprima) => {

    const dispatch = useDispatch();
    const handleDelete = () => {
        let payload = {id:materiaprima.materiaprima.id}
        dispatch(deleteMateriaPrimaServer(payload))
        }
    return ( 
        <tr>
            <td><Link to={`/cadastroMP/${materiaprima.materiaprima.id}`}><button>{materiaprima.materiaprima.id}</button></Link></td>
            <td>{materiaprima.materiaprima.tipo}</td>
            <td>{materiaprima.materiaprima.fornecedor}</td>
            <td>{materiaprima.materiaprima.qtd}</td>
            <td>{materiaprima.materiaprima.custo}</td>
            <button onClick={handleDelete} id ='deletar'>Delete</button>
        </tr>
     );
}
 
export default LinhaMateriaPrima;