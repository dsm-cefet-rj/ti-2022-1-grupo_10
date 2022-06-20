import React from "react";
import InfoVenda from "./InfoVenda";

/**
*@module Components/ContainerVenda
*/

/**
 * Neste componente é feito o Container onde se encontra o header da tabela a ser exibida no Relatório de Vendas
 * @param {Produto} produtos - produto a ser exibido
 */

const ContainerVenda = ({produtos}) =>{
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
                <InfoVenda produto={produto}/>
            ))}
        </>
    )
}

export default ContainerVenda;