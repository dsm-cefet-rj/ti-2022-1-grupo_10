
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
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

/**
*@module Components/Home
*/

/**
 * Neste componente é renderizada a tela de home onde é exibido características básicas sobre os produtos, materias primas e fornecedores cadastrados, há também a opção de deletar ou ir pra tela de edição.
 * Caso o usuário não esteja autenticado ou desconectado do banco de dados, será gerada uma notificação de erro
 * @param {MateriaPrima} materiasprimas - Materia Prima a ser exibida, contendo seu nome, fornecedor, custo e quantidade em estoque
 * @param {Produto} produtos - produto a ser exibido, contendo seu nome, custo de produção e preço
 * @param {Fornecedor} fornecedores - fornecedor a ser exibido contendo seu nome, estado e bairro
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
        toast.error('Não foi possível obter produtos ou você não está autorizado', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            containerId: 'Produtos'
            });
            toast.clearWaitingQueue({ containerId: "Produtos" });
        
        tabelaProdutos = <div>Houve algum erro...</div>;
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
        toast.error('Não foi possível obter Insumos ou você não está autorizado', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            containerId: 'Insumos'
            });
            toast.clearWaitingQueue({ containerId: "Insumos" });
        
      }
          //Alterado por Marcos
      let tabelaFornecedores = '';
      if(statusFornecedores === 'loaded' || statusFornecedores === 'saved' || statusFornecedores === 'deleted' ){
        tabelaFornecedores = 
            <table className="produtos">
                    <td>Edições</td>
                    <td>Nome do Fornecedor</td>
                    <td>Estado</td>
                    <td>Bairro</td>
                    <td>Deleções</td>
                <TabelaFornecedor fornecedores={fornecedores} />
            </table>
         }else if(statusFornecedores === 'loading'){
            tabelaFornecedores = <div>Carregando os fornecedores...</div>;
         }else if(statusFornecedores === 'failed'){
            toast.error('Não foi possível obter fornecedores ou você não está autorizado', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                containerId: 'Fornecedores'
                });
            toast.clearWaitingQueue({ containerId: "Fornecedores" });                
         }
            //fim da alteração

    
    return (
        <div className="home">
            <div id="home-texto">
                <div id="home-texto_2">
                    <h1>Estoqueasy</h1>
                    <h2>Seu negócio</h2>
                    <ToastContainer
                        enableMultiContainer 
                        containerId={'Produtos'}
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        limit={1}
                    />
                    <ToastContainer
                        enableMultiContainer 
                        containerId={'Insumos'}
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        limit={1}
                    />
                    <ToastContainer
                        enableMultiContainer 
                        containerId={'Fornecedores'}
                        position="top-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        limit={1}
                    />
                    {tabelaProdutos}
                    {tabelaMateriasprimas}
                    {tabelaFornecedores}
                </div>
            </div>
        </div> 
    );
}

export default Home;
