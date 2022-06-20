import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchMateriasPrimas, selectAllMateriasPrimas } from "../app/materiaPrimaSlice";
import { store } from "../app/store";
import ContainerMateriaPrima from "./ContainerMateriaPrima";

/**
*@module Components/RelatorioMateriaPrima
*/

/**
 * Neste componente é renderizado o relatório das matérias primas mais utilizadas
 * @param {MateriaPrima} materiaprimas - materia prima a ser exibida
 */


const RelatorioMateriaPrima = () => {

  
  const materiasprimas = useSelector(selectAllMateriasPrimas)
  const statusMateriasprimas = useSelector(state => state.materiasprimas.status);
  const errorMateriasprimas = useSelector(state => state.materiasprimas.error);
  useEffect(()=>{store.dispatch(fetchMateriasPrimas())},[])
  
  let tabelaMateriasprimas = '';
      if(statusMateriasprimas === 'loaded' || statusMateriasprimas === 'saved' || statusMateriasprimas === 'deleted' ){
        tabelaMateriasprimas = 
          <div className="container-report">
            <ContainerMateriaPrima materiasprimas={materiasprimas}/>
          </div>
      }else if(statusMateriasprimas === 'loading'){
        tabelaMateriasprimas = <div>Carregando a Matéria Prima...</div>;
      }else if(statusMateriasprimas === 'failed'){
        tabelaMateriasprimas = <div>Error: {errorMateriasprimas}</div>;
      }

    return(
        <>
            <div id="relatorio">
                <h1>MATERIA PRIMA</h1>
                {tabelaMateriasprimas}
            </div>
        </>
    )
}

export default RelatorioMateriaPrima;