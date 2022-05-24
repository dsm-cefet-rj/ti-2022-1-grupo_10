import React from "react";
import VendaInfo from "./VendaInfo";

const VendaContainer = ({tableData}) =>{
    return(
        <>
            <table className="feedstock-cell">
                <tr>
                    <td>
                        <p>Nome</p>
                    </td>
                    <td>
                        <p>Quantidade Produto</p>
                    </td>
                    <td>
                        <p>Preco</p>
                    </td>
                </tr>
            </table>
            {tableData.map((tableData) =>(
                <VendaInfo tableData={tableData}/>
            ))}
        </>
    )
}

export default VendaContainer;
