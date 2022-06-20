import React from "react";

/**
*@module Components/InfoVenda
*/

/**
 * Neste componente é exibida as linhas da tabela no Container de Vendas
 * @param {Produto} produtos - produto a ser exibido
 */

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