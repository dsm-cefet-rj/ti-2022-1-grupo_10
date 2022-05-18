import React from "react";


const Home = ({tableData}) => {
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
                    <a href="#cadastro" class="btn" id="ir-cadastro">adicionar</a>
                    <a href="#produzir" class="btn" id="ir-produzir">produzir</a>
                    <a href="#relatorio" class="btn" id="ir-relatorio">relatórios</a>
                </div>
            </div>
        </div> 
    );
}

 
export default Home;