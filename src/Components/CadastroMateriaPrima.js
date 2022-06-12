import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMateriaPrima } from "../app/materiaPrimaSlice";
import { useParams } from "react-router-dom";


const CadastroMateriaPrima = () => {

    const dispatch = useDispatch();
    const mps=useSelector(state=>state.mps.mps);
    let { id } = useParams();
    id = parseInt(id);

    const [mp, setMp] = useState(
        id ? mps.filter((p) => p.id === id)[0] ?? {} : {});


    const handleChange=(evt)=>{  
        const newInput = (fieldValues)=>({...fieldValues, [evt.target.name]:evt.target.value})
        setMp(newInput)
    }

    const handleSubmit=(evt) =>{
        evt.preventDefault();
        const checkEmptyInput = !Object.values(mp).every(fieldValue=>fieldValue==="")
        if(checkEmptyInput){
            dispatch(addMateriaPrima(mp))
            const emptyInput= {tipo:'', qtd:'', fornecedor:'', custo:''}
            setMp(emptyInput)
        }
    }

    return (
        <div id="cadastro">
            <div id="header">
                <h2>Cadastro de matéria-prima</h2>
            </div>
            <form id="form_produto" class="cadastro_form">
                <label>Nome da matéria-prima</label>
                <input type="text" onChange={handleChange} value={mp.tipo} name="tipo" className="form-control"  placeholder="Nome"/>
                <label>Quantidade(kg)</label>
                <input type="number" onChange={handleChange} value={mp.qtd} name="qtd" className="form-control" placeholder="Quantidade"/>
                <label>Fornecedor</label>
                <input type="text" onChange={handleChange} value={mp.fornecedor} name="fornecedor" className="form-control"  placeholder="Nome"/>
                <label>Preço</label>
                <input type="number" onChange={handleChange} value={mp.custo} name="custo" className="form-control" placeholder="Valor"/>
                <input type="submit" onClick={handleSubmit} class="btn" />
            </form>
        </div>
    );
}


export default CadastroMateriaPrima;