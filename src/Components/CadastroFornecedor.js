import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addFornecedorServer, selectFornecedoresById, updateFornecedorServer } from "../app/fornecedorSlice";

/**
*@module Components/CadastroFornecedor
*/

/**
*@typedef Fornecedor
*@type {object}
*@property {number} id - identificador
*@property {string} nomeFornecedor - nome fornecedor
*@property {string} estadoFornecedor - estado de onde é o fornecedor
*@property {string} bairroFornecedor - bairro do fornecedor
*@property {string} urlFornecedor - URL do site de vendas do fornecedor
*/

/**
 * Neste componente é feito o cadastro ou edição de uma matéria prima
 * @param {Fornecedor} fornecedor - fornecedor a ser atualizado ou cadastrado
 */



const CadastroFornecedor = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    let { id } = useParams();
    const fornecedorFound = useSelector(state => selectFornecedoresById(state, id))
    
    const [fornecedor, setFornecedor] = useState(
        id ? fornecedorFound ?? {} : {}
    )
    const [actionType, ] = useState(
        id ? fornecedorFound 
                ? 'fornecedores/updateFornecedorServer'
                : 'fornecedores/addFornecedorServer'
                : 'fornecedores/addFornecedorServer');

    const handleChange = (event) => {
        const newInput = (fieldValues)=>({...fieldValues, [event.target.name]:event.target.value});
        setFornecedor(newInput);
    }

    const handleSubmit = () => {

        const checkEmptyInput = !Object.values(fornecedor).every(fieldValue=>fieldValue==="")
        if(checkEmptyInput){
            if(actionType === 'fornecedores/addFornecedorServer'){
                dispatch(addFornecedorServer(fornecedor));
            }
            else if (actionType === 'fornecedores/updateFornecedorServer'){
                dispatch(updateFornecedorServer(fornecedor));
            }
            navigate('/home');
            const emptyInput= {nomeFornecedor:'', estadoFornecedor:'', bairroFornecedor:''}
            setFornecedor(emptyInput);
        }
    }

    return (
        <div id="cadastro">
            <div id="header">
                <h2>Cadastro do Fornecedor</h2>
            </div>
            <form id="form_produto" class="cadastro_form">
                <label>Nome do Fornecedor</label>
                <input type="text" onChange={handleChange} value={fornecedor.nomeFornecedor} name="nomeFornecedor" className="form-control"  placeholder="Nome"/>
                <label>Estado</label>
                <input type="text" onChange={handleChange} value={fornecedor.estadoFornecedor} name="estadoFornecedor" className="form-control" placeholder="Estado"/>
                <label>Bairro</label>
                <input type="text" onChange={handleChange} value={fornecedor.bairroFornecedor} name="bairroFornecedor" className="form-control"  placeholder="Bairro"/>
                <label>Url do Fornecedor</label>
                <input type="url" onChange={handleChange} value={fornecedor.urlFornecedor} name="urlFornecedor" className="form-control"  placeholder="http://fornecedor.com"/>
                <input type="submit" onClick={handleSubmit} class="btn" />
            </form>
        </div>
    );
}


export default CadastroFornecedor;