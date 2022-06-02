import React from "react";

const MateriaPrimaInfo = ({tableMaterial}) => {
    return(
        <table className="feedstock-cell">
            <tr>
                <td>
                    <p>{tableMaterial.nomeMateriaPrima}</p>
                </td>
                <td>
                    <p>{tableMaterial.qtdMateriaPrima}</p>
                </td>
                <td>
                    <p>{tableMaterial.valorMateriaPrima}</p>
                </td>
            </tr>
        </table>
    )
}

export default MateriaPrimaInfo;