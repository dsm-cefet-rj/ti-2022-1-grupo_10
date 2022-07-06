import React from "react";
import InfoDaVenda from "./InfoDaVenda";

/**
*@module Components/ContainerVenda
*/

/**
 * Neste componente é feito o Container onde se encontra o header da tabela a ser exibida no Relatório de Vendas
 * @param {Produto} produtos - produto a ser exibido
 */

const ContainerDaVenda = ({vendas}) =>{
    return(
        <>
            <table className="venda-cell">
                <tr>
                    <td>
                        <p>Produto</p>
                    </td>
                    <td>
                        <p>Quantidade</p>
                    </td>
                    <td>
                        <p>Lucro</p>
                    </td>
                </tr>
            </table>
            {vendas.map((venda) =>(
                <InfoDaVenda venda={venda}/>
            ))}
        </>
    )
}

export default ContainerDaVenda;