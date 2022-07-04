import React from "react";
import InfoMateriaPrima from "./InfoMateriaPrima";

/**
*@module Components/ContainerMateriaPrima
*/

/**
 * Neste componente é feito o Container onde se encontra o header da tabela a ser exibida no Relatório de Matéria Prima
 * @param {MateriaPrima} materiasprimas - Materia Prima a ser exibida
 */

const ContainerMateriaPrima = ({materiasprimas}) => {
    return(
        <>
            <table className="feedstock-cell">
                <tr>
                    <td>
                        <p>Nome</p>
                    </td>
                    <td>
                        <p>Quantidade no estoque</p>
                    </td>
                    <td>
                        <p>Vezes utilizado</p>
                    </td>
                </tr>
            </table>
            {materiasprimas.map((materiasprimas)=>(
                <InfoMateriaPrima materiasprimas = {materiasprimas}/>
            ))}
        </>
    )
}

export default ContainerMateriaPrima;