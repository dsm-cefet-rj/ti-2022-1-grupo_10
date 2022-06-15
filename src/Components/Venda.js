import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  selectAllProdutos, updateProdutoServer } from "../app/produtosSlice";

const Venda = () => {

  const dispatch = useDispatch();

  const produtos = useSelector(selectAllProdutos)
  const [Produto,setProduto]=useState("");
  const [Qtd,setQtd]=useState("");


const handleproduce = (e)=>{
  let produto = produtos.find((item)=>item.nomeProduto.includes(Produto))
  produto = {...produto, qtdProduto: parseInt(produto.qtdProduto) - parseInt(Qtd), Vendidos: parseInt(produto.Vendidos) + parseInt(Qtd)}
  dispatch(updateProdutoServer(produto))
}


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