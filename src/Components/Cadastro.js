import React from "react";


const Cadastro = ({handleChange, formInputData, handleSubmit}) => {
    
    
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