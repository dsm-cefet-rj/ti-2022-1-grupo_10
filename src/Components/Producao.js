import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProdutos, updateProdutoServer} from "../app/produtosSlice";


 
const Producao = () => {

  const dispatch = useDispatch();
  const produtos = useSelector(selectAllProdutos)
  

  const [tasks,setTasks]=useState([
    {
      nome:"nome produto"
    },    
  ]);

  
const handleproduce = ()=>{
  let produto = produtos.find((item)=>item.nomeProduto.includes(tasks))
  produto = {...produto, qtdProduto: parseInt(produto.qtdProduto) + parseInt(Qtd), Produzidos: parseInt(produto.Produzidos) + parseInt(Qtd)}
  dispatch(updateProdutoServer(produto))
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