import React from "react";
import RelatorioProduzidos from './RelatorioProduzidos';

const Relatorio = () => {
    const colunas = [
        { heading: "Produto", value: 'nome'},
        { heading: "Vezes produzido", value: 'qtd'},
    ]
    const produtos = [
        {
            nome: "Brinco",
            qtd: 15,
        },
        {
            nome: "Colar",
            qtd: 14,
        },
        {
            nome: "Colar1",
            qtd: 19,
        },
        {
            nome: "Colar2",
            qtd: 25,
        },
        {
            nome: "Colar3",
            qtd: 36,
        }
    ]

    return (
        <div id="relatorio">
          <div id="header">
              <h2>Relatórios</h2>
            </div>
          

        <RelatorioProduzidos produtos = {produtos} colunas = {colunas}/>


        </div>  
    )
}

export default Relatorio;