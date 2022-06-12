import React from "react";
import ContainerVenda from "./ContainerVenda";
import { useSelector } from "react-redux";
import TabelaProdutos from "./TabelaProdutos";

const RelatorioVenda = () =>{

    const produtosState = useSelector(state => state.produtos);
    const produtos = produtosState.produtos;
    const statusProdutos = produtosState.status;
    const errorProdutos = produtosState.error;

    let tabelaProdutos = '';
    if(statusProdutos === 'loaded'){
        tabelaProdutos = 
        <div className="container-report">
            <ContainerVenda produtos = {produtos}/>
        </div>
      }else if(statusProdutos === 'loading'){
        tabelaProdutos = <div>Carregando os Produtos...</div>;
      }else if(statusProdutos === 'failed'){
        tabelaProdutos = <div>Error: {errorProdutos}</div>;
      }

    return (
        <>
            <div id="relatorio">
                <h1>VENDAS</h1>
                {tabelaProdutos}
            </div>
        </>
    )
}

export default RelatorioVenda;