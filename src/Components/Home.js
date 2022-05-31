import React from "react";
import { useSelector } from "react-redux";



const Home = ({tableMaterial}) => {

    const produtos=useSelector(state=>state.produtos);
    
    return (
        <>

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
                        <TabelaProdutos produtos={produtos} />
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

                    </div>
                </div>
            </div> 
        </>
        
    );
}

const LinhaProdutos = (props) => {
    return(
        <tr>
            <td>{props.produto.id}</td>
            <td>{props.produto.nomeProduto}</td>
            <td>{props.produto.custoProduto}</td>
            <td>{props.produto.valorProduto}</td>
        </tr>
    );
}

function TabelaProdutos(props){
    return(
        <tbody>
            {props.produtos.map((produto) => <LinhaProdutos key={produto.id} produto={produto} />)}
        </tbody>
    );
}

 
export default Home;