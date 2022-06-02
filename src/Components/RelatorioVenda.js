import React from "react";
import ContainerVenda from "./ContainerVenda";
import { useSelector } from "react-redux";

const RelatorioVenda = () =>{

    const produtos=useSelector(state=>state.produtos);
    return (
        <>
            <div id="relatorio">
                <h1>VENDAS</h1>
                <div className="container-report">
                    <ContainerVenda produtos = {produtos}/>
                </div>
            </div>
        </>
    )
}

export default RelatorioVenda;