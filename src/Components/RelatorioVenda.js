import React, { useEffect } from "react";
import ContainerVenda from "./ContainerVenda";
import { useSelector } from "react-redux";
import { fetchProdutos, selectAllProdutos } from "../app/produtosSlice";
import { store } from "../app/store";

const RelatorioVenda = () =>{

    const produtos = useSelector(selectAllProdutos)
    const statusProdutos = useSelector(state => state.produtos.status);
    const errorProdutos = useSelector(state => state.produtos.error);
    useEffect(()=>{store.dispatch(fetchProdutos())},[]);
    
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