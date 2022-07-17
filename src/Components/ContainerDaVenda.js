import React from "react";
import InfoDaVenda from "./InfoDaVenda";

/**
*@module Components/ContainerDaVenda
*/

/**
 * Neste componente é feito o Container onde se encontra o header da tabela a ser exibida no Relatório de Vendas
 * @param {Venda} vendas - vendas a serem exibidas, contendo o nome do produto vendido, quantidade vendida e Lucro obtido
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