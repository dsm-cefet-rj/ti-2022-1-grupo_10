import React from "react";

const MateriaPrimaInfo = ({mps}) => {
    return(
        <table className="feedstock-cell">
            <tr>
                <td>
                    <p>{mps.tipo}</p>
                </td>
                <td>
                    <p>{mps.qtd}</p>
                </td>
                <td>
                    <p>{mps.custo}</p>
                </td>
            </tr>
        </table>
    )
}

export default MateriaPrimaInfo;