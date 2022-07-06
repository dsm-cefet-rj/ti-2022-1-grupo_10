import React from "react";

/**
*@module Components/InfoVenda
*/

/**
 * Neste componente é exibida as linhas da tabela no Container de Vendas
 * @param {Produto} produtos - produto a ser exibido
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