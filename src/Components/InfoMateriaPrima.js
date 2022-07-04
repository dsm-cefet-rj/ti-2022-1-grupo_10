import React from "react";

/**
*@module Components/InfoMateriaPrima
*/

/**
 * Neste componente é exibida as linhas da tabela no Container de Materia Prima
 * @param {MateriaPrima} materiasprimas - Materia Prima a ser exibida
 */

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
                    <p>{materiasprimas.usos}</p>
                </td>
            </tr>
        </table>
    )
}

export default MateriaPrimaInfo;