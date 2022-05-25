import React from "react";
import MateriaPrimaContainer from "./MateriaPrimaContainer";

const RelatorioMateriaPrima = ({tableMaterial}) => {
    return(
        <>
            <div id="relatorio">
                <h1>MATERIA PRIMA</h1>
                <div className="container-report">
                    <MateriaPrimaContainer tableMaterial={tableMaterial}/>
                </div>
            </div>
        </>
    )
}

export default RelatorioMateriaPrima;