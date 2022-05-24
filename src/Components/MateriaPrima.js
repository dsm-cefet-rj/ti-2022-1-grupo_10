import React from "react";

const MateriaPrima = ({materiaPrima}) => {
    return(
        <table className="feedstock-cell">
            <tr>
                <td>
                    <p>{materiaPrima.name}</p>
                </td>
                <td>
                    <p>{materiaPrima.count}</p>
                </td>
                <td>
                    <p>{materiaPrima.price}</p>
                </td>
            </tr>
        </table>
    )
}

export default MateriaPrima;
