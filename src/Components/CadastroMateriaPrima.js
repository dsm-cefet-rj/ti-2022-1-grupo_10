import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addMateriaPrima } from "../app/materiaPrimaSlice";


const CadastroMateriaPrima = () => {

    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState([
        {
          tipo:'',
          qtd:'',
          fornecedor:'',
          custo:'',
        }
    ]);

    const handleChange=(evt)=>{  
        const newInput = (fieldValues)=>({...fieldValues, [evt.target.name]:evt.target.value})
        setFormInput(newInput)
    }

    const handleSubmit=(evt) =>{
        evt.preventDefault();
        const checkEmptyInput = !Object.values(formInput).every(fieldValue=>fieldValue==="")
        if(checkEmptyInput){
            dispatch(addMateriaPrima(formInput))
            const emptyInput= {tipo:'', qtd:'', fornecedor:'', custo:''}
            setFormInput(emptyInput)
        }
    }

    return (
        <div id="cadastro">
            <div id="header">
                <h2>Cadastro de matéria-prima</h2>
            </div>
            <form id="form_produto" class="cadastro_form">
                <label>Nome da matéria-prima</label>
                <input type="text" onChange={handleChange} value={formInput.tipo} name="tipo" className="form-control"  placeholder="Nome"/>
                <label>Quantidade(kg)</label>
                <input type="number" onChange={handleChange} value={formInput.qtd} name="qtd" className="form-control" placeholder="Quantidade"/>
                <label>Fornecedor</label>
                <input type="text" onChange={handleChange} value={formInput.fornecedor} name="fornecedor" className="form-control"  placeholder="Nome"/>
                <label>Preço</label>
                <input type="number" onChange={handleChange} value={formInput.custo} name="custo" className="form-control" placeholder="Valor"/>
                <input type="submit" onClick={handleSubmit} class="btn" />
            </form>
        </div>
    );
}


export default CadastroMateriaPrima;