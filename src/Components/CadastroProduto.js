import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduto } from "../app/produtosSlice";
import DropdownMenu from "./DropdownMenu";


const CadastroProduto = () => {

    const mps=useSelector(state=>state.mps.mps);

    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState(
        {
        nomeProduto:'',
        qtdProduto:'',
        custoProduto:'',
        valorProduto:'',
        }
    );
   
    const handleChange=(evt)=>{  
        const newInput = (fieldValues)=>({...fieldValues, [evt.target.name]:evt.target.value})
        setFormInput(newInput)
    }
    
    const handleSubmit=(evt) =>{
        evt.preventDefault();
        const checkEmptyInput = !Object.values(formInput).every(fieldValue=>fieldValue==="")
        if(checkEmptyInput){
            dispatch(addProduto(formInput))
            const emptyInput= {nomeProduto:'', qtdProduto:'', custoProduto:'', valorProduto:''}
            setFormInput(emptyInput)
        }
    }

    return (
        <div id="cadastro">
            <div id="header">
                <h2>Cadastro de produtos</h2>
            </div>
            <form id="form_produto" class="cadastro_form">
                <label>Nome do produto</label>
                <input type="text" onChange={handleChange} value={formInput.nomeProduto} name="nomeProduto" className="form-control"  placeholder="Nome"/>
                <label>Quantidade</label>
                <input type="number" onChange={handleChange} value={formInput.qtdProduto} name="qtdProduto" className="form-control" placeholder="Quantidade"/>
                <label>Custo</label>
                <input type="number" onChange={handleChange} value={formInput.custoProduto} name="custoProduto" className="form-control" placeholder="Custo"/>
                <label>Preço</label>
                <input type="number" onChange={handleChange} value={formInput.valorProduto} name="valorProduto" className="form-control" placeholder="Valor"/>
                <label>Materias-prima</label>
                <DropdownMenu arr={mps}/>
                <input type="submit" onClick={handleSubmit} class="btn" />
            </form>
        </div>
    );
}
 
export default CadastroProduto;