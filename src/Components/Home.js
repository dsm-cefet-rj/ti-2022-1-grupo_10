
import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { selectAllProdutos } from "../app/produtosSlice";
import TabelaProdutos from './TabelaProdutos';
import TabelaMateriaPrima from './TabelaMateriaPrima';
import TabelaFornecedor from './TabelaFornecedor';
import {store} from '../app/store';
import { fetchProdutos } from '../app/produtosSlice'; 
import { fetchMateriasPrimas, selectAllMateriasPrimas } from "../app/materiaPrimaSlice";
import { fetchFornecedor, selectAllFornecedores } from "../app/fornecedorSlice";

/**
*@module Components/Home
*/

/**
 * Neste componente é renderizada a tela de home onde é exibido características básicas sobre os produtos e materias primas cadastrados, há também a opção de deletar ou ir pra tela de edição.
 * @param {MateriaPrima} materiasprimas - Materia Prima a ser exibida
 * @param {Produto} produtos - produto a ser exibido
 * @param {Fornecedor} fornecedores - fornecedor a ser exibido
 */

const Home = () => {


    const produtos = useSelector(selectAllProdutos)
    const statusProdutos = useSelector(state => state.produtos.status);
    const errorProdutos = useSelector(state => state.produtos.error);
    useEffect(()=>{store.dispatch(fetchProdutos())},[])

    const materiasprimas = useSelector(selectAllMateriasPrimas)
    const statusMateriasprimas = useSelector(state => state.materiasprimas.status);
    const errorMateriasprimas = useSelector(state => state.materiasprimas.error);
    useEffect(()=>{store.dispatch(fetchMateriasPrimas())},[])

    const fornecedores = useSelector(selectAllFornecedores)
    const statusFornecedores = useSelector(state => state.fornecedores.status);
    const errorFornecedores = useSelector(state => state.fornecedores.error);
    useEffect(()=>{store.dispatch(fetchFornecedor())},[])

    let tabelaProdutos = '';
    if(statusProdutos === 'loaded' || statusProdutos === 'saved' || statusProdutos === 'deleted' ){
        tabelaProdutos = 
            <table className="produtos">
                <td>Edições</td>
                <td>Nome do Produto</td>
                <td>Custo</td>
                <td>Preço</td>
                <td>Deleções</td>
                <TabelaProdutos produtos={produtos} />
            </table>
      }else if(statusProdutos === 'loading'){
        tabelaProdutos = <div>Carregando os Produtos...</div>;
      }else if(statusProdutos === 'failed'){
        tabelaProdutos = <div>Error: {errorProdutos}</div>;
      }

      let tabelaMateriasprimas = '';
      if(statusMateriasprimas === 'loaded' || statusMateriasprimas === 'saved' || statusMateriasprimas === 'deleted' ){
        tabelaMateriasprimas = 
            <table className="produtos">
                    <td>Edições</td>
                    <td>Nome do Insumo</td>
                    <td>Fornecedor</td>
                    <td>Custo</td>
                    <td>Quantidade</td>
                    <td>Deleções</td>
                <TabelaMateriaPrima materiasprimas={materiasprimas} />
            </table>
      }else if(statusMateriasprimas === 'loading'){
        tabelaMateriasprimas = <div>Carregando a Matéria Prima...</div>;
      }else if(statusMateriasprimas === 'failed'){
        tabelaMateriasprimas = <div>Error: {errorMateriasprimas}</div>;
      }
          //Alterado por Marcos
      let tabelaFornecedores = '';
      // if(statusFornecedores === 'loaded' || statusFornecedores === 'saved' || statusFornecedores === 'deleted' ){
        tabelaFornecedores = 
            <table className="produtos">
                    <td>Edições</td>
                    <td>Nome do Fornecedor</td>
                    <td>Estado</td>
                    <td>Bairro</td>
                    <td>Deleções</td>
                <TabelaFornecedor fornecedores={fornecedores} />
            </table>
      // }else if(statusFornecedores === 'loading'){
      //   tabelaFornecedores = <div>Carregando os fornecedores...</div>;
      // }else if(statusFornecedores === 'failed'){
      //   tabelaFornecedores = <div>Error: {errorFornecedores}</div>;
      // }
          //Fim da alteração

    
    return (
        <div className="home">
            <div id="home-texto">
                <div id="home-texto_2">
                    <h1>Estoqueasy</h1>
                    <h2>Seu negócio</h2>
                    {tabelaProdutos}
                    {tabelaMateriasprimas}
                    {tabelaFornecedores}
                </div>
            </div>
        </div> 
    );
}

export default Home;
