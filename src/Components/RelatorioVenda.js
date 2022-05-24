import React from "react";
import VendaContainer from "./VendaContainer";

const RelatorioVenda = ({tableData}) =>{
    return (
        <>
            <div id="relatorio">
                <h1>VENDAS</h1>
                <div className="container-report">
                    <VendaContainer tableData={tableData}/>
                </div>
            </div>
        </>
    )
}

export default RelatorioVenda;