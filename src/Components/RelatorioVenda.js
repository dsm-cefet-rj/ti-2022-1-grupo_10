import React, { useEffect } from "react";
import ContainerVenda from "./ContainerVenda";
import { useSelector } from "react-redux";
import { fetchProdutos, selectAllProdutos } from "../app/produtosSlice";
import { store } from "../app/store";
import { useNavigate } from "react-router-dom";


/**
*@module Components/RelatorioVenda
*/

/**
 * Neste componente é renderizado o relatório dos produtos mais vendidos
 * @param {Produto} produtos - produto a ser exibido
 */

const RelatorioVenda = () =>{
    const navigate = useNavigate()
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
      const handleNavigate = ()=>{
        navigate('/relatorioDasVendas')
      }

    return (
        <>
            <div id="relatorio">
                <h1>Produtos Vendidos</h1>
                <button type="menu" onClick={handleNavigate} class="btn_3">Ir para vendas</button>
                {tabelaProdutos}
            </div>
        </>
    )
}

export default RelatorioVenda;