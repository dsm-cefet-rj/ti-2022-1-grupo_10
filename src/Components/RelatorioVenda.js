import React from "react";
import VendaContainer from "./VendaContainer";
import { useSelector } from "react-redux";

const RelatorioVenda = () =>{

    const produtos=useSelector(state=>state.produtos);
    return (
        <>
            <div id="relatorio">
                <h1>VENDAS</h1>
                <div className="container-report">
                    <VendaContainer produtos = {produtos}/>
                </div>
            </div>
        </>
    )
}

export default RelatorioVenda;