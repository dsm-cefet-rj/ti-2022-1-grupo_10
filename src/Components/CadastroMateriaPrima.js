import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { selectAllFornecedores } from "../app/fornecedorSlice";
import { addMateriaPrimaServer, updateMateriaPrimaServer, selectMateriasPrimasById } from "../app/materiaPrimaSlice";


/**
*@module Components/CadastroMateriaPrima
*/

/**
*@typedef MateriaPrima
*@type {object}
*@property {number} id - identificador
*@property {string} tipo - tipo da Materia Prima
*@property {number} qtd - Quantidade de materia prima
*@property {string} fornecedor - Nome do fornecedor de onde é comprada a materia prima
*@property {number} custo - Preço da materia prima
*@property {number} qtdUsos - Quantidade de vezes que foi utilizada a materia prima na realização de um produto
*/

/**
 * Neste componente é feito o cadastro ou edição de uma matéria prima
 * @param {MateriaPrima} mp - Materia Prima a ser utilizada ou Cadastrada
 */



const CadastroMateriaPrima = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    let {id} = useParams();
    
    const materiaPrimaFound = useSelector(state => selectMateriasPrimasById(state, id))
    const fornecedores = useSelector(selectAllFornecedores)

    const [mp, setMp] = useState(
        id ? materiaPrimaFound ?? {} : {});

    const [actionType, ] = useState(
        id ? materiaPrimaFound 
            ? 'materiasprimas/updateMateriaPrimaServer'
            : 'materiasprimas/addMateriaPrimaServer'
            : 'materiasprimas/addMateriaPrimaServer');


    const handleChange=(evt)=>{  
        const newInput = (fieldValues)=>({...fieldValues, [evt.target.name]:evt.target.value})
        setMp(newInput)
    }

    const handleSubmit=(evt) =>{
        const checkEmptyInput = !Object.values(mp).every(fieldValue=>fieldValue==="")
        if(checkEmptyInput){
            if(actionType === 'materiasprimas/addMateriaPrimaServer'){
                dispatch(addMateriaPrimaServer(mp))
            }
            else if (actionType === 'materiasprimas/updateMateriaPrimaServer'){
                dispatch(updateMateriaPrimaServer(mp))
            }
            navigate('/home')
            const emptyInput= {tipo:'', qtd:'', fornecedor:'', custo:''}
            setMp(emptyInput)
        }
    }

    return (
        <div id="cadastro">
            <div id="header">
                <h2>Cadastro de matéria-prima</h2>
                <p>Alerta: não cadastre materias primas com o mesmo nome</p>
            </div>
            <form id="form_produto" class="cadastro_form">
                <label>Nome da matéria-prima</label>
                <input type="text" onChange={handleChange} value={mp.tipo} name="tipo" className="form-control"  placeholder="Nome"/>
                <label>Quantidade(kg)</label>
                <input type="number" onChange={handleChange} value={mp.qtd} name="qtd" className="form-control" placeholder="Quantidade"/>
                <label>Fornecedor</label>
                <input list = "Fornecedor" onChange={handleChange} value={mp.fornecedor} name="fornecedor" className="form-control" placeholder="Fornecedor"/>
                <datalist id = "Fornecedor">
                    {fornecedores.map((fornecedores,index)=>(
                        <option value = {fornecedores.nomeFornecedor}/>
                     ))}
                </datalist>
                <label>Preço</label>
                <input type="number" onChange={handleChange} value={mp.custo} name="custo" className="form-control" placeholder="Valor"/>
                <input type="submit" onClick={handleSubmit} class="btn" />
            </form>
        </div>
    );
}


export default CadastroMateriaPrima;