import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { Produzir } from "../app/produtosSlice";

 
const Producao = () => {

  const dispatch = useDispatch();

  const [tasks,setTasks]=useState([
    {
      nome:"nome produto"
    },    
  ]);
  
const handleproduce = ()=>{
  let payload = {nome:tasks,qtd:Qtd}
  dispatch(Produzir(payload))
  // const dataselected = tableData.find((item)=>item.nomeProduto.includes(tasks))
  // const newtabledata = tableData.map((item,index)=>{
  //   if (item===dataselected){
  //     return {
  //       ...item,qtdProduto:parseInt(item.qtdProduto)+parseInt(Qtd)
  //     }
  //   }
  //   return item
  // })
  // setTableData(newtabledata)
}

  const [Qtd,setQtd]=useState("");

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
            <th>Quantidade</th>
          </tr>
          <tbody>
            <tr>
              <th><input type="text"onChange={(e)=>setTasks(e.target.value)}></input></th>
              <th><input type="number"onChange={(e)=>setQtd(e.target.value)}></input></th>
            </tr>
          </tbody>
        </table>
        <button type="menu" onClick={handleproduce} class="btn_3">produzir</button>
      </div>
    </div>
  )
}

export default Producao;