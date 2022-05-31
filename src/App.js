import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import RelatorioProduzidos from "./Components/RelatorioProduzidos";
import RelatorioMateriaPrima from "./Components/RelatorioMateriaPrima";
import Cadastro from './Components/Cadastro';
import Home from "./Components/Home";
import Producao from "./Components/producao";
import Venda from "./Components/Venda";
import CadastroMateriaPrima from './Components/CadastroMateriaPrima';
import RelatorioVenda from "./Components/RelatorioVenda";
import Navbar from "./Components/Navbar";




const App = () => {
  
  const [tableData, setTableData] = useState([])
  const [tableMaterial, setTableMaterial] = useState([])
  const [formInputData, setformInputData] = useState(
      {
      nomeProduto:'',
      qtdProduto:'',
      custoProduto:'',
      valorProduto:'',
      }
  );
 
  const handleChange=(evnt)=>{  
    const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setformInputData(newInput)
  }
  
  const handleSubmit= (evnt) =>{
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
    if(checkEmptyInput)
    {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {nomeProduto:'', qtdProduto:'', custoProduto:'', valorProduto:''}
      setformInputData(emptyInput)
    }
  }

  // formulario de MP
  const [formInput, setformInput] = useState(
    {
      nomeMateriaPrima:'',
      qtdMateriaPrima:'',
      fornecedor:'',
      valorMateriaPrima:'',
    }
    );

    const onChange=(event)=>{  
      const newInput = (data)=>({...data, [event.target.name]:event.target.value})
      setformInput(newInput)
    }

    const onSubmit= (event) =>{
      event.preventDefault();
      const checkEmptyInput = !Object.values(formInput).every(res=>res==="")
      if(checkEmptyInput)
      {
        const newData = (data)=>([...data, formInput])
        setTableMaterial(newData);
        const emptyInput= {nomeMateriaPrima:'', qtdMateriaPrima:'', fornecedor:'', valorMateriaPrima:''}
        setformInput(emptyInput)
      }
  }
  
  return(
    <>
      <main>
        <Router>
          <Navbar/>        
          <Routes>
            <Route path="/" element={<Home tableMaterial={tableMaterial}/>} />
            <Route path="/home" element={<Home tableMaterial={tableMaterial} />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastroMP" element={<CadastroMateriaPrima onChange={onChange} formInput={formInput} onSubmit={onSubmit}/>} />
            <Route path="/producao" element={<Producao />} />
            <Route path="/venda" element={<Venda />} />
            <Route path="/relatorioproduzidos" element={<RelatorioProduzidos />} />
            <Route path="/relatorioMP" element={<RelatorioMateriaPrima tableMaterial = {tableMaterial}/>} />
            <Route path="/relatorioVenda" element={<RelatorioVenda />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App;