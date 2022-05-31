import React from "react";


const VendaInfo = ({produto}) =>{
    return(
        <>
            <table className="venda-cell">
                <tr>
                    <td>
                        <p>{produto.nomeProduto}</p>
                    </td>
                    <td>
                        <p>{produto.Vendidos}</p>
                    </td>
                    <td>
                        <p>{produto.qtdProduto}</p>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default VendaInfo;