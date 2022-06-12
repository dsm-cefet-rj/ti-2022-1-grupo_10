import React from "react";
import { useSelector } from "react-redux";

import TabelaProdutos from './TabelaProdutos';
import TabelaMateriaPrima from './TabelaMateriaPrima';

const Home = () => {


    const produtosState = useSelector(state => state.produtos);
    const produtos = produtosState.produtos;
    const statusProdutos = produtosState.status;
    const errorProdutos = produtosState.error;

    const mpsState = useSelector(state => state.mps);
    const mps = mpsState.mps;
    const statusMps = mpsState.status;
    const errorMps = mpsState.error;

    let tabelaProdutos = '';
    if(statusProdutos === 'loaded'){
        tabelaProdutos = 
            <table className="produtos">
                <td>N.</td>
                <td>Nome do Produto</td>
                <td>Custo</td>
                <td>Preço</td>
                <TabelaProdutos produtos={produtos} />
            </table>
      }else if(statusProdutos === 'loading'){
        tabelaProdutos = <div>Carregando os Produtos...</div>;
      }else if(statusProdutos === 'failed'){
        tabelaProdutos = <div>Error: {errorProdutos}</div>;
      }

      let tabelaMps = '';
      if(statusMps === 'loaded'){
        tabelaMps = 
            <table className="produtos">
                <thead>
                    <th>N.</th>
                    <th>Nome da Matéria-prima</th>
                    <th>Fornecedor</th>
                    <th>Custo</th>
                    <th>Quantidade</th>
                </thead>
                <TabelaMateriaPrima mps={mps} />
            </table>
      }else if(statusMps === 'loading'){
        tabelaMps = <div>Carregando a Matéria Prima...</div>;
      }else if(statusMps === 'failed'){
        tabelaMps = <div>Error: {errorMps}</div>;
      }


    
    return (
        <div className="home">
            <div id="home-texto">
                <div id="home-texto_2">
                    <h1>Estoqueasy</h1>
                    <h2>Seu negócio</h2>
                    {tabelaProdutos}
                    {tabelaMps}
                </div>
            </div>
        </div> 
    );
}

export default Home;