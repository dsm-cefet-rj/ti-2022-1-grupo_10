import React, {useState} from "react";

function vazio(x){
    alert ("Produto esgotado.") // Alerta para avisar que não há mais produto para vender 
    return x
}

const Venda = ({tableData,setTableData}) => {
  const [tasks,setTasks]=useState("");


const handleproduce = ()=>{
  const dataselected = tableData.find(item=>item.nomeProduto.includes(tasks)) // selecionando conjunto de array que possui o nomeProduto inputado 
  const newtabledata = tableData.map((item)=>{       // passeando por cada array até encontrar o que se iguale com o conjunto de "dataselected"
    if (item===dataselected){                         
        if(item.qtdProduto > 0)
            return {                                              // quando encontra, é descrementado um da quantidade do respectivo Produto
                ...item,qtdProduto:parseInt(item.qtdProduto)-1    // caso chegue a 0, emite um alerta e retorna o array
            }
            return vazio(item)
    }
    return item
  }) 
  setTableData(newtabledata)
}

  //console.log(tableData)

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

