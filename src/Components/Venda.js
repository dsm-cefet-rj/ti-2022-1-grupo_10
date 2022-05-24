import React, {useState} from "react";


function limite(x){
    alert ("Quantidade de produtos a ser vendida maior do que a presente no estoque.")    
    return x
}

const Venda = ({tableData,setTableData}) => {
  
  const [Produto,setProduto]=useState("");
  const [Qtd,setQtd]=useState("");


const handleproduce = (e)=>{
  const dataselected = tableData.find(item=>item.nomeProduto.includes(Produto))      
  const newtabledata = tableData.map((item)=>{
    if (item===dataselected){
        if(item.qtdProduto >= Qtd)
            return {
                ...item,qtdProduto:parseInt(item.qtdProduto)-parseInt(Qtd)       
            }                                                        
            return limite(item)                                           
    }
    return item
  }) 
  setTableData(newtabledata)
}

  // console.log(tableData)

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
                  <input type="text"onChange={(e)=>setProduto(e.target.value)}></input>              
                </tr>
                <tr>
                  <th>Quantidade</th>
                </tr>
                <tr>
                  <input type="number"onChange={(e)=>setQtd(e.target.value)}></input>              
                </tr>             
              </table>
          <button onClick={handleproduce} class="btn_2" id ="vender">Vender</button>
          
      </div>
    </div>  
  )
}

export default Venda;
