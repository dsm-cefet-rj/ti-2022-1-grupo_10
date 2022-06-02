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


const App = () => {  
  
  const [tableMaterial, setTableMaterial] = useState([
    {
      nomeMateriaPrima: "Fecho",
      qtdMateriaPrima: 1,
      fornecedor: "FechosExpress",
      valorMateriaPrima: 1
    },
    {
      nomeMateriaPrima: "Gancho",
      qtdMateriaPrima: 1,
      fornecedor: "GanchosExpress",
      valorMateriaPrima: 2
    }
  ]);
  
  return(
    <>
      <main>
        <Router>
          <Navbar/>        
          <Routes>
            <Route path="/" element={<Home tableMaterial={tableMaterial}/>} />
            <Route path="/home" element={<Home tableMaterial={tableMaterial} />} />
            <Route path="/cadastroProduto" element={<CadastroProduto tableMaterial={tableMaterial}/>} />
            <Route path="/cadastroMP" element={<CadastroMateriaPrima />} />
            <Route path="/producao" element={<Producao />} />
            <Route path="/venda" element={<Venda />} />
            <Route path="/relatorioProduto" element={<RelatorioProduto />} />
            <Route path="/relatorioMP" element={<RelatorioMateriaPrima tableMaterial = {tableMaterial}/>} />
            <Route path="/relatorioVenda" element={<RelatorioVenda />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App;