import LinhaMateriaPrima from './LinhaMateriaPrima';

/**
*@module Components/TabelaMateriaPrima
*/

/**
 * Neste componente é renderizado a tabela da materia prima e passado como parametro para LinhaMateriaPrima as materias primas a serem exibidas
 * @param {MateriaPrima} props.materiasprimas - materia prima a ser exibida
 */


const TabelaMateriaPrima = (props) => {
    return ( 
        <tbody>
            {props.materiasprimas.map((materiaprima) => <LinhaMateriaPrima key={materiaprima.id} materiaprima ={materiaprima} />)}
        </tbody>
    );
}
 
export default TabelaMateriaPrima;