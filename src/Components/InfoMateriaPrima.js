import React from "react";

const MateriaPrimaInfo = ({materiasprimas}) => {
    return(
        <table className="feedstock-cell">
            <tr>
                <td>
                    <p>{materiasprimas.tipo}</p>
                </td>
                <td>
                    <p>{materiasprimas.qtd}</p>
                </td>
                <td>
                    <p>{materiasprimas.custo}</p>
                </td>
            </tr>
        </table>
    )
}

export default MateriaPrimaInfo;