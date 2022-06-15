import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { selectAllMateriasPrimas } from "../app/materiaPrimaSlice";
import { addProdutoServer, updateProdutoServer, selectProdutosById } from "../app/produtosSlice";
import DropdownMenu from "./DropdownMenu";


const CadastroProduto = (props) => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    let {id} = useParams();
    id = parseInt(id);
    const produtoFound = useSelector(state => selectProdutosById(state, id))

    const materiasprimas=useSelector(state => selectAllMateriasPrimas);

    const [produto, setProduto] = useState(
        id ? produtoFound ?? {} : {});

 
    const [actionType, ] = useState(
        id ? produtoFound 
                ? 'produtos/updateProdutoServer'
                : 'produtos/addProdutoServer'
                : 'produtos/addProdutoServer');
    
   
    const handleChange=(evt)=>{  
        const newInput = (fieldValues)=>({...fieldValues, [evt.target.name]:evt.target.value})
        setProduto(newInput)
    }
    
    const handleSubmit=(evt) =>{
        const checkEmptyInput = !Object.values(produto).every(fieldValue=>fieldValue==="")
        if(checkEmptyInput){
            if(actionType === 'produtos/addProdutoServer'){
                dispatch(addProdutoServer(produto));
            }
            else if (actionType === 'produtos/updateProdutoServer'){
                dispatch(updateProdutoServer(produto));
            }
            navigate('/home');
            const emptyInput= {nomeProduto:'', qtdProduto:'', custoProduto:'', valorProduto:''}
            setProduto(emptyInput)
        }
        
    }

    return (
        <div id="cadastro">
            <div id="header">
                <h2>Cadastro de produtos</h2>
            </div>
            <form id="form_produto" class="cadastro_form">
                <label>Nome do produto</label>
                <input type="text" onChange={handleChange} value={produto.nomeProduto} name="nomeProduto" className="form-control"  placeholder="Nome"/>
                <label>Quantidade</label>
                <input type="number" onChange={handleChange} value={produto.qtdProduto} name="qtdProduto" className="form-control" placeholder="Quantidade"/>
                <label>Custo</label>
                <input type="number" onChange={handleChange} value={produto.custoProduto} name="custoProduto" className="form-control" placeholder="Custo"/>
                <label>Preço</label>
                <input type="number" onChange={handleChange} value={produto.valorProduto} name="valorProduto" className="form-control" placeholder="Valor"/>
                {
                //<label>Materias-prima</label>
                //<DropdownMenu arr={materiasprimas}/> (não esta funcionando depois de colocar materia prima no adapter "arr.map is not a function")
                }
                <input type="submit" onClick={handleSubmit} class="btn" />
            </form>
        </div>
    );
}
 
export default CadastroProduto;
