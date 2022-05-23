import React from "react";
import VendaContainer from "./VendaContainer";

const RelatorioVenda = () =>{
    return (
        <>
            <div id="relatorio">
                <h1>VENDAS</h1>
                <div className="container-report">
                    <VendaContainer/>
                </div>
            </div>
        </>
    )
}

export default RelatorioVenda;