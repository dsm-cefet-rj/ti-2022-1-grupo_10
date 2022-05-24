import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({tableData, tableMaterial}) => {
    let navigate = useNavigate();
    return ( 
        <div class ="home">
            <div id="home-texto">
                <div id="home-texto_2">
                    <h1>Estoqueasy</h1>
                    <h2>Seu negócio</h2>
                    <table class="produtos">
                    <tr>
                        <th>N.</th>
                        <th>Nome do Produto</th>
                        <th>Custo</th>
                        <th>Preço</th>
                    </tr>
                    <tbody>
                        {tableData.map((data,index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.nomeProduto}</td>
                                    <td>{data.custoProduto}</td>
                                    <td>{data.valorProduto}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>

                    <table class="produtos"> {/* mudar nome */}
                    <tr>
                        <th>N.</th>
                        <th>Nome da Matéria-prima</th>
                        <th>Fornecedor</th>
                        <th>Custo</th>
                        <th>Quantidade</th>
                    </tr>
                    <tbody>
                        {tableMaterial.map((data,index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.nomeMateriaPrima}</td>
                                    <td>{data.fornecedor}</td>
                                    <td>{data.valorMateriaPrima}</td>
                                    <td>{data.qtdMateriaPrima}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>

                    <button onClick={() => {navigate("/cadastro");}} class="btn" id="ir-cadastro">adicionar</button>
                    <button onClick={() => {navigate("/cadastroMP");}} class="btn" id="ir-cadastroMP">adicionarMP</button>
                    <button onClick={() => {navigate("/producao");}} class="btn" id="ir-producao">produzir</button>
                    <button onClick={() => {navigate("/venda");}} class="btn" id="ir-venda">vender</button>
                    <button onClick={() => {navigate("/relatorioproduzidos");}} class="btn" id="ir-relatorioproduzidos">relatorio</button>
                    <button onClick={() => {navigate("/relatorioMP");}} class="btn" id="ir-relatorioMP">relatorioMP</button>
                </div>
            </div>
        </div> 
    );
}

 
export default Home;
