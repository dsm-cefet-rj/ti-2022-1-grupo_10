import React from "react";
import MateriaPrimaInfo from "./MateriaPrimaInfo";

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
                <MateriaPrimaInfo tableMaterial = {tableMaterial}/>
            ))}
        </>
    )
}

export default ContainerMateriaPrima;