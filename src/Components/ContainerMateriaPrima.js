import React from "react";
import InfoMateriaPrima from "./InfoMateriaPrima";

const ContainerMateriaPrima = ({tableMaterial}) => {
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
            {tableMaterial.map((tableMaterial)=>(
                <InfoMateriaPrima tableMaterial = {tableMaterial}/>
            ))}
        </>
    )
}

export default ContainerMateriaPrima;