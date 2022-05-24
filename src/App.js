import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import RelatorioProduzidos from "./Components/RelatorioProduzidos";
import RelatorioMateriaPrima from "./Components/RelatorioMateriaPrima";
import Cadastro from './Components/Cadastro';
import Home from "./Components/Home";
import Producao from "./Components/producao";
import Venda from "./Components/Venda";
import CadastroMateriaPrima from './Components/CadastroMateriaPrima';
import RelatorioVenda from "./Components/RelatorioVenda";



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

  //Formulário da Matéria-prima
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
          <nav>
            <Link to="/home"> Home </Link>
            <Link to="/cadastro"> Cadastro </Link>
            <Link to="/cadastroMP"> CadastroMateriaPrima </Link>
            <Link to="/producao"> Produção </Link>
            <Link to="/relatorioproduzidos"> Relatorioproduzidos </Link>
            <Link to="/venda"> Venda </Link>
            <Link to="/relatorioMP"> relatorioMatériaPrima </Link>
          </nav>
          
          <Routes>
            <Route path="/home" element={<Home tableData={tableData} tableMaterial={tableMaterial} />} />
            <Route path="/cadastro" element={<Cadastro handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>} />
            <Route path="/cadastroMP" element={<CadastroMateriaPrima onChange={onChange} formInput={formInput} onSubmit={onSubmit}/>} />
            <Route path="/producao" element={<Producao tableData={tableData} setTableData={setTableData} />} />
            <Route path="/venda" element={<Venda tableData={tableData} setTableData={setTableData} />} />
            <Route path="/relatorioproduzidos" element={<RelatorioProduzidos tableData={tableData}/>} />
            <Route path="/relatorioMP" element={<RelatorioMateriaPrima/>} />
          </Routes>
       </Router>

        <CadastroMateriaPrima onChange={onChange} formInput={formInput} onSubmit={onSubmit}/>
      
        <Cadastro handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
  
  
  
      <div id="produzir">
          <Producao tableData={tableData} setTableData={setTableData} />

      </div>

      <Venda tableData={tableData} setTableData={setTableData} />
  
      <RelatorioProduzidos tableData={tableData}/>

      

     
          
      </main>
  </>  
   
  ) 

}

export default App;
