import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduto } from "../app/produtosSlice";


const Cadastro = () => {

    const dispatch = useDispatch();

    const [formInputData, setformInputData] = useState(
        {
        nomeProduto:'',
        qtdProduto:'',
        custoProduto:'',
        valorProduto:'',
        }
    );
   
    const handleChange=(evnt)=>{  
      const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
      setformInputData(newInput)
    }
    
    const handleSubmit= (evnt) =>{
      evnt.preventDefault();
      const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
      if(checkEmptyInput)
      {
        dispatch(addProduto(formInputData))
        const emptyInput= {nomeProduto:'', qtdProduto:'', custoProduto:'', valorProduto:''}
        setformInputData(emptyInput)
      }
    }
    
    
    return (
        
        <>
            
            
            <div id="cadastro">
                <div id="header">
                    <h2>Cadastro de produtos</h2>
                </div>
                <form id="form_produto" class="cadastro_form">
                    <label>Nome do produto</label>
                    <input 
                        type="text" 
                        onChange={handleChange} value={formInputData.nomeProduto} name="nomeProduto" className="form-control"  placeholder="Nome"
                    />
                    <label>Quantidade</label>
                    <input 
                        type="number" onChange={handleChange} value={formInputData.qtdProduto} name="qtdProduto" className="form-control" placeholder="Quantidade"
                    />
                    <label>Custo</label>
                    <input 
                        type="number" onChange={handleChange} value={formInputData.custoProduto} name="custoProduto" className="form-control" placeholder="Custo"
                    />
                    <label>Preço</label>
                    <input 
                        type="number" onChange={handleChange} value={formInputData.valorProduto} name="valorProduto" className="form-control" placeholder="Valor"
                    />
                    <input type="submit" onClick={handleSubmit} class="btn" />
                </form>


            </div>
        </>
    );
}
 
export default Cadastro;