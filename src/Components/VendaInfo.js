import React from "react";

const VendaInfo = ({tableData}) =>{
    return(
        <>
            <table className="venda-cell">
                <tr>
                    <td>
                        <p>{tableData.nomeProduto}</p>
                    </td>
                    <td>
                        <p>{tableData.qtdProduto}</p>
                    </td>
                    <td>
                        <p>{tableData.valorProduto}</p>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default VendaInfo;