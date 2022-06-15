
import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { selectAllProdutos } from "../app/produtosSlice";
import TabelaProdutos from './TabelaProdutos';
import TabelaMateriaPrima from './TabelaMateriaPrima';
import {store} from '../app/store';
import { fetchProdutos } from '../app/produtosSlice'; 
import { fetchMateriasPrimas, selectAllMateriasPrimas } from "../app/materiaPrimaSlice";

const Home = () => {


    const produtos = useSelector(selectAllProdutos)
    const statusProdutos = useSelector(state => state.produtos.status);
    const errorProdutos = useSelector(state => state.produtos.error);
    useEffect(()=>{store.dispatch(fetchProdutos())},[])

    const materiasprimas = useSelector(selectAllMateriasPrimas)
    const statusMateriasprimas = useSelector(state => state.materiasprimas.status);
    const errorMateriasprimas = useSelector(state => state.materiasprimas.error);
    useEffect(()=>{store.dispatch(fetchMateriasPrimas())},[])

    let tabelaProdutos = '';
    if(statusProdutos === 'loaded' || statusProdutos === 'saved' || statusProdutos === 'deleted' ){
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

      let tabelaMateriasprimas = '';
      if(statusMateriasprimas === 'loaded' || statusMateriasprimas === 'saved' || statusMateriasprimas === 'deleted' ){
        tabelaMateriasprimas = 
            <table className="produtos">
                <thead>
                    <th>N.</th>
                    <th>Nome da Matéria-prima</th>
                    <th>Fornecedor</th>
                    <th>Custo</th>
                    <th>Quantidade</th>
                </thead>
                <TabelaMateriaPrima materiasprimas={materiasprimas} />
            </table>
      }else if(statusMateriasprimas === 'loading'){
        tabelaMateriasprimas = <div>Carregando a Matéria Prima...</div>;
      }else if(statusMateriasprimas === 'failed'){
        tabelaMateriasprimas = <div>Error: {errorMateriasprimas}</div>;
      }


    
    return (
        <div className="home">
            <div id="home-texto">
                <div id="home-texto_2">
                    <h1>Estoqueasy</h1>
                    <h2>Seu negócio</h2>
                    {tabelaProdutos}
                    {tabelaMateriasprimas}
                </div>
            </div>
        </div> 
    );
}

export default Home;
