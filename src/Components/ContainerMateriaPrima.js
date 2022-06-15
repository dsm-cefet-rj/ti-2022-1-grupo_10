import React from "react";
import InfoMateriaPrima from "./InfoMateriaPrima";

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
                        <p>Preco</p>
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