import React, { useState } from "react";
import './App.css';
import RelatorioProduzidos from "./Components/RelatorioProduzidos";
import RelatorioMateriaPrima from "./Components/RelatorioMateriaPrima";
import Cadastro from './Components/Cadastro';
import Home from "./Components/Home";
import Producao from "./Components/producao";



const App = () => {
  
  const [tableData, setTableData] = useState([])
  const [formInputData, setformInputData] = useState(
      {
      nomeProduto:'',
      qtdProduto:''
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
        const emptyInput= {nomeProduto:'', qtdProduto:''}
        setformInputData(emptyInput)
      }
  }
  
  return(
  <>
     <main>

        <Home tableData={tableData} />
      
        <Cadastro handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
  
  
  
      <div id="produzir">
          <Producao tableData={tableData} setTableData={setTableData} />

      </div>
  
      <RelatorioProduzidos tableData={tableData}/>

      <RelatorioMateriaPrima/>
  
  
      </main>
  </>  
   
  )
}

export default App;