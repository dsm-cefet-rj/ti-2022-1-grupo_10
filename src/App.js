import React, { useState } from "react";
import './App.css'
import RelatorioProduzidos from "./Components/RelatorioProduzidos";
import Cadastro from './Components/Cadastro'
import Home from "./Components/Home";



const App = () => {
  
  const [tableData, setTableData] = useState([])
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
  
  return(
  <>
     <main>

        <Home tableData={tableData} />
      
        <Cadastro handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
  
  
  
      <div id="produzir">
          <div id="header">
              <h2>Produção</h2>
            </div>
            <h1>Clique produzir para salvar no Estoqueasy</h1>
          <table class="producao">
              <tr>
                <th>Nome do produto</th>
              </tr>
              <tr>
                <td>brinco</td>              
              </tr>            
        </table>
        <button type="menu" onClick="alert('Pouca materia-prima')" class="btn_2">produzir</button>
      </div>
  
        <RelatorioProduzidos tableData={tableData}/>
  
  
      </main>
  </>  
   
  )
}

export default App;
