import React from "react";

/**
*@module Components/InfoDaVenda
*/

/**
 * Neste componente é exibida as linhas da tabela no Container de Vendas
 * @param {Venda} venda - venda a ser exibida
 */

const VendaInfo = ({venda}) =>{
    return(
        <>
            <table className="venda-cell">
                <tr>
                    <td>
                        <p>{venda.produto}</p>
                    </td>
                    <td>
                        <p>{venda.qtd}</p>
                    </td>
                    <td>
                        <p>{venda.lucro}</p>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default VendaInfo;