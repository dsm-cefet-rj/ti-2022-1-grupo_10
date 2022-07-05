import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFornecedorServer } from "../app/fornecedorSlice";

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
*/

/**
 * Neste componente é feito o cadastro ou edição de uma matéria prima
 * @param {Fornecedor} fornecedor - Materia Prima a ser utilizada ou Cadastrada
 */



const CadastroFornecedor = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fornecedor, setFornecedor] = useState({})

    const handleChange = (event) => {
        const newInput = (fieldValues)=>({...fieldValues, [event.target.name]:event.target.value});
        setFornecedor(newInput);
    }

    const handleSubmit = () => {
        dispatch(addFornecedorServer(fornecedor));
        navigate('/home');
        const emptyInput= {nomeFornecedor:'', estadoFornecedor:'', bairroFornecedor:''}
        setFornecedor(emptyInput);
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
                <input type="submit" onClick={handleSubmit} class="btn" />
            </form>
        </div>
    );
}


export default CadastroFornecedor;