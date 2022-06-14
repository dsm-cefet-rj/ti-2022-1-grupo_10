import React from "react";
import { useSelector } from "react-redux";
import ContainerMateriaPrima from "./ContainerMateriaPrima";

const RelatorioMateriaPrima = () => {

    const mpsState = useSelector(state =>state.mps);
    const mps = mpsState.mps;
    const statusMps = mpsState.status;
    const errorMps = mpsState.error;

    let tabelaMps = '';
      if(statusMps === 'loaded'){
        tabelaMps = 
            <div className="container-report">
                <ContainerMateriaPrima mps={mps}/>
            </div>
      }else if(statusMps === 'loading'){
        tabelaMps = <div>Carregando a Matéria Prima...</div>;
      }else if(statusMps === 'failed'){
        tabelaMps = <div>Error: {errorMps}</div>;
      }

    return(
        <>
            <div id="relatorio">
                <h1>MATERIA PRIMA</h1>
                {tabelaMps}
            </div>
        </>
    )
}

export default RelatorioMateriaPrima;