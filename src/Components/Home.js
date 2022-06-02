import React from "react";
import { useSelector } from "react-redux";

import TabelaProdutos from './TabelaProdutos';
import TabelaMateriaPrima from './TabelaMateriaPrima';

const Home = ({tableMaterial}) => {

    const produtos=useSelector(state=>state.produtos);
    const mps=useSelector(state=>state.mps);
    
    return (
        <div className="home">
            <div id="home-texto">
                <div id="home-texto_2">
                    <h1>Estoqueasy</h1>
                    <h2>Seu negócio</h2>
                    <table className="produtos">
                        <td>N.</td>
                        <td>Nome do Produto</td>
                        <td>Custo</td>
                        <td>Preço</td>
                        <TabelaProdutos produtos={produtos} />
                    </table>
                    {/* Mudar nome */}
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
                </div>
            </div>
        </div> 
    );
}

export default Home;