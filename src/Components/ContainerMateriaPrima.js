import React from "react";
import InfoMateriaPrima from "./InfoMateriaPrima";

const ContainerMateriaPrima = ({mps}) => {
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
            {mps.map((mps)=>(
                <InfoMateriaPrima mps = {mps}/>
            ))}
        </>
    )
}

export default ContainerMateriaPrima;