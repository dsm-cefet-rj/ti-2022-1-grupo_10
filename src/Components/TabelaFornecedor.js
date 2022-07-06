import LinhaFornecedor from './LinhaFornecedor';

/**
*@module Components/TabelaFornecedor
*/

/**
 * Neste componente é renderizado a tabela da materia prima e passado como parametro para LinhaMateriaPrima as materias primas a serem exibidas
 * @param {Fornecedor} props.fornecedores - materia prima a ser exibida
 */


const TabelaFornecedor = (props) => {
    return ( 
        <tbody>
            {props.fornecedores.map((fornecedor) => <LinhaFornecedor key={ fornecedor.id } fornecedor={ fornecedor } />)}
        </tbody>
    );
}
 
export default TabelaFornecedor;