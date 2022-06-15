import LinhaMateriaPrima from './LinhaMateriaPrima';

const TabelaMateriaPrima = (props) => {
    return ( 
        <tbody>
            {props.materiasprimas.map((materiaprima) => <LinhaMateriaPrima key={materiaprima.id} materiaprima ={materiaprima} />)}
        </tbody>
    );
}
 
export default TabelaMateriaPrima;