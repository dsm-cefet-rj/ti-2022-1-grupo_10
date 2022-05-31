import React from "react";
import VendaInfo from "./VendaInfo";

const VendaContainer = ({produtos}) =>{
    return(
        <>
            <table className="venda-cell">
                <tr>
                    <td>
                        <p>Nome</p>
                    </td>
                    <td>
                        <p>Vendas</p>
                    </td>
                    <td>
                        <p>Estoque</p>
                    </td>
                </tr>
            </table>
            {produtos.map((produto) =>(
                <VendaInfo produto={produto}/>
            ))}
        </>
    )
}

export default VendaContainer;