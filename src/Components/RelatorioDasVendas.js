import React, { useEffect } from "react";
import ContainerDaVenda from "./ContainerDaVenda";
import { useSelector } from "react-redux";
import { store } from "../app/store";
import { useNavigate } from "react-router-dom";
import { fetchVendas, selectAllVendas } from "../app/vendaSlice";


/**
*@module Components/RelatorioDasVendas
*/

/**
 * Neste componente é renderizado o relatório das vendas que foram realizadas pelo usuário
 * @param {Venda} vendas - venda a ser exibida
 */

const RelatorioDasVendas = () =>{
    const navigate = useNavigate()

    const vendas = useSelector(selectAllVendas)
    const statusVendas = useSelector(state => state.vendas.status);
    const errorVendas = useSelector (state => state.vendas.error);
    
    useEffect(()=>{store.dispatch(fetchVendas())},[]);

    let tabelaProdutos = '';
    
    if(statusVendas === 'loaded'){
        tabelaProdutos = 
        <div className="container-report">
            <ContainerDaVenda vendas = {vendas}/>
        </div>
      }else if(statusVendas === 'loading'){
        tabelaProdutos = <div>Carregando as vendas...</div>;
      }else if(statusVendas === 'failed'){
        tabelaProdutos = <div>Error: {errorVendas}</div>;
      }
      const handleNavigate = ()=>{
        navigate('/relatorioVenda')
      }
    

    return (
        <>
            <div id="relatorio">
                <h1>VENDAS</h1>
                <button type="menu" onClick={handleNavigate} class="btn_3">Ir para Produtos</button>
                {tabelaProdutos}
            </div>
        </>
    )
}

export default RelatorioDasVendas;