import React from "react";

const MateriaPrimaInfo = ({materiaPrima}) => {
    return(
        <table className="feedstock-cell">
            <tr>
                <td>
                    <p>{materiaPrima.nomeMateriaPrima}</p>
                </td>
                <td>
                    <p>{materiaPrima.qtdMateriaPrima}</p>
                </td>
                <td>
                    <p>{materiaPrima.valorMateriaPrima}</p>
                </td>
            </tr>
        </table>
    )
}

export default MateriaPrimaInfo;
