import React, {useState} from "react";

function vazio(x){
    alert ("Produto esgotado.")    // Alerta para caso haja tentativa de venda com quantidade do produto zerada
    return x
}

const Venda = ({tableData,setTableData}) => {
  const [tasks,setTasks]=useState("");


const handleproduce = ()=>{
  const dataselected = tableData.find(item=>item.nomeProduto.includes(tasks))      // identifica o conjunto de dados do array que possui o nomeProduto igual ao input
  const newtabledata = tableData.map((item)=>{
    if (item===dataselected){
        if(item.qtdProduto > 0)
            return {
                ...item,qtdProduto:parseInt(item.qtdProduto)-1       // toda vez que percorrendo os dados for encontrado o valor igual ao inputado, decrementa uma unidade do produto
            }                                                        // Caso a quantidade do produto seja igual a zero e haja tentiva de venda, um alerta é emitido
            return vazio(item)                                           
    }
    return item
  }) 
  setTableData(newtabledata)
}

  console.log(tableData)

  return (
    <div id="venda">

      <div id="producao">
          <div id="header">
                <h2>Venda</h2>
              </div>
              <h1>Clique vender para remover no Estoqueasy</h1>
            <table class="producao">
                <tr>
                  <th>Nome do produto</th>
                </tr>
                <tr>
                  <input type="text"onChange={(e)=>setTasks(e.target.value)}></input>              
                </tr>            
              </table>
          <button type="menu" onClick={handleproduce} class="btn_2">Vender</button>
      </div>
    </div>  
  )
}

export default Venda;

