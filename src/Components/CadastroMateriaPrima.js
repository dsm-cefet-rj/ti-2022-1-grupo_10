import React, {useState} from "react";

const CadastroMateriaPrima = () => {
    const [formInput, setformInput] = useState([
        {
          nomeMateriaPrima:'',
          qtdMateriaPrima:'',
          fornecedor:'',
          valorMateriaPrima:'',
        }
    ]);

    const handleChange=(event)=>{  
        const newInput = (data)=>({...data, [event.target.name]:event.target.value})
        setformInput(newInput)
    }

    const handleSubmit= (event) =>{
        event.preventDefault();
        const checkEmptyInput = !Object.values(formInput).every(res=>res==="")
        if(checkEmptyInput){
            const newData = (data)=>([...data, formInput])
            setTableMaterial(newData);
            const emptyInput= {nomeMateriaPrima:'', qtdMateriaPrima:'', fornecedor:'', valorMateriaPrima:''}
            setformInput(emptyInput)
        }
    }

    return (
        <div id="cadastro">
            <div id="header">
                <h2>Cadastro de matéria-prima</h2>
            </div>
            <form id="form_produto" class="cadastro_form">
                <label>Nome da matéria-prima</label>
                <input type="text" handleChange={handleChange} value={formInput.nomeMateriaPrima} name="nomeMateriaPrima" className="form-control"  placeholder="Nome"/>
                <label>Quantidade(kg)</label>
                <input type="number" handleChange={handleChange} value={formInput.qtdMateriaPrima} name="qtdMateriaPrima" className="form-control" placeholder="Quantidade"/>
                <label>Fornecedor</label>
                <input type="text" handleChange={handleChange} value={formInput.fornecedor} name="fornecedor" className="form-control"  placeholder="Nome"/>
                <label>Preço</label>
                <input type="number" handleChange={handleChange} value={formInput.valorMateriaPrima} name="valorMateriaPrima" className="form-control" placeholder="Valor"/>
                <input type="submit" onClick={handleSubmit} class="btn" />
            </form>
        </div>
    );
}


export default CadastroMateriaPrima;