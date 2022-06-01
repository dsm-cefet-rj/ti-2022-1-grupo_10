import React from "react";

const CadastroMateriaPrima = () => {
    return (
        <div id="cadastro">
            <div id="header">
                <h2>Cadastro de matéria-prima</h2>
            </div>
            <form id="form_produto" class="cadastro_form">
                <label>Nome da matéria-prima</label>
                <input type="text" onChange={onChange} value={formInput.nomeMateriaPrima} name="nomeMateriaPrima" className="form-control"  placeholder="Nome"/>
                <label>Quantidade(kg)</label>
                <input type="number" onChange={onChange} value={formInput.qtdMateriaPrima} name="qtdMateriaPrima" className="form-control" placeholder="Quantidade"/>
                <label>Fornecedor</label>
                <input type="text" onChange={onChange} value={formInput.fornecedor} name="fornecedor" className="form-control"  placeholder="Nome"/>
                <label>Preço</label>
                <input type="number" onChange={onChange} value={formInput.valorMateriaPrima} name="valorMateriaPrima" className="form-control" placeholder="Valor"/>
                <input type="submit" onClick={onSubmit} class="btn" />
            </form>
        </div>
    );
}


export default CadastroMateriaPrima;