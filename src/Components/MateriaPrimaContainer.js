import React from "react";
import MateriaPrimaInfo from "./MateriaPrimaInfo";

const MateriaPrimaContainer = ({materiaPrima}) => {
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
            {materiaPrima.map((materiaPrima)=>(
                <MateriaPrimaInfo materiaPrima = {materiaPrima}/>
            ))}
        </>
    )
}

export default MateriaPrimaContainer;