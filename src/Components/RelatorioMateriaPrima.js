import React from "react";
import ContainerMateriaPrima from "./ContainerMateriaPrima";

const RelatorioMateriaPrima = ({tableMaterial}) => {
    return(
        <>
            <div id="relatorio">
                <h1>MATERIA PRIMA</h1>
                <div className="container-report">
                    <ContainerMateriaPrima tableMaterial={tableMaterial}/>
                </div>
            </div>
        </>
    )
}

export default RelatorioMateriaPrima;