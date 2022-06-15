// Dependencies
import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

// Components
import CadastroMateriaPrima from './Components/CadastroMateriaPrima';
import CadastroProduto from './Components/CadastroProduto';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Producao from "./Components/Producao";
import RelatorioMateriaPrima from "./Components/RelatorioMateriaPrima";
import RelatorioProduto from "./Components/RelatorioProduto";
import RelatorioVenda from "./Components/RelatorioVenda";
import Venda from "./Components/Venda";
import { Provider } from 'react-redux';
import {store} from './app/store';
import { fetchProdutos } from './app/produtosSlice';
import { fetchMateriasPrimas } from './app/materiaPrimaSlice';

store.dispatch(fetchProdutos());
store.dispatch(fetchMateriasPrimas());

//PARA DAR RUN NO JSON-SERVER USE npm run json-server


const App = () => {
  
  
  return(
    <>
      <Provider store = {store} >
        <main>
          <Router>
            <Navbar/>        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastroProduto" element={<CadastroProduto />} />
              <Route path="/cadastroProduto/:id" element={<CadastroProduto />} />
              <Route path="/cadastroMP" element={<CadastroMateriaPrima />} />
              <Route path="/cadastroMP/:id" element={<CadastroMateriaPrima />} />
              <Route path="/producao" element={<Producao />} />
              <Route path="/venda" element={<Venda />} />
              <Route path="/relatorioProduto" element={<RelatorioProduto />} />
              <Route path="/relatorioMP" element={<RelatorioMateriaPrima />} />
              <Route path="/relatorioVenda" element={<RelatorioVenda />} />
            </Routes>
          </Router>
        </main>
      </Provider> 
      
    </>
  )
}

export default App;