import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
 
const Producao = ({tableData,setTableData}) => {
  const [tasks,setTasks]=useState([
    {
      nome:"nome produto"
    },    
  ]);

  



const handleproduce = ()=>{
  const dataselected = tableData.find((item)=>item.nomeProduto.includes(tasks))
  const newtabledata = tableData.map((item,index)=>{
    if (item===dataselected){
      return {
        ...item,qtdProduto:parseInt(item.qtdProduto)+1
      }
    }
    return item
  })
  setTableData(newtabledata)
}
let navigate = useNavigate();

  console.log(tableData)
 
  return (
    <div id="produzir">
      <div id="producao">
          <div id="header">
                <h2>Produção</h2>
              </div>
              <h1>Clique produzir para salvar no Estoqueasy</h1>
            <table class="producao">
                <tr>
                  <th>Nome do produto</th>
                  
                </tr>
                <tr>
                  <input type="text"onChange={(e)=>setTasks(e.target.value)}></input>              
                </tr>            
              </table>
          <button type="menu" onClick={handleproduce} class="btn_2">produzir</button>
          <button onClick={() => {navigate("/relatorioproduzidos");}} class="btn" id="ir-relatorioproduzidos">relatorio</button>
          <button onClick={() => {navigate("/");}} class="btn_2" id="ir-home">Home</button>

      </div>
    </div>  
  )
}

export default Producao;

