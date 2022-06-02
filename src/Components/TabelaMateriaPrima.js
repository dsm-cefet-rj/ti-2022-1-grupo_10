import LinhaMateriaPrima from './LinhaMateriaPrima';

const TabelaMateriaPrima = (props) => {
    return ( 
        <tbody>
            {props.mps.map((mp) => <LinhaMateriaPrima key={mp.id} mp={mp} />)}
        </tbody>
    );
}
 
export default TabelaMateriaPrima;