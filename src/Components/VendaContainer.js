import React from "react";
import VendaInfo from "./VendaInfo";

const VendaContainer = ({tableData}) =>{
    return(
        <>
            {tableData.map((tableData) =>(
                <VendaInfo tableData={tableData}/>
            ))}
        </>
    )
}

export default VendaContainer;