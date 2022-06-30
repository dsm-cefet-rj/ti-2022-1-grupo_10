import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  selectAllProdutos, updateProdutoServer } from "../app/produtosSlice";

/**
*@module Components/Venda
*/

/**
 * Neste componente é feito a venda de um produto, diminuindo a quantidade em estoque e aumentando a variavel "Vendidos"
 * @param {Produto} produto - produto a ser vendido
 * @param {string} Produto - nome do produto a ser vendido
 * @param {string} Qtd - quantidade a ser vendida
 */

const Venda = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const produtos = useSelector(selectAllProdutos)
  const [Produto,setProduto]=useState("");
  const [Qtd,setQtd]=useState("");


const handleproduce = (e)=>{
  let produto = produtos.find((item)=>item.nomeProduto.includes(Produto))
  if(Qtd <= produto.qtdProduto){
  produto = {...produto, qtdProduto: parseInt(produto.qtdProduto) - parseInt(Qtd), Vendidos: parseInt(produto.Vendidos) + parseInt(Qtd)}
  dispatch(updateProdutoServer(produto))
  navigate('/relatorioVenda')
  }
}


return (
    <div id="produzir">
      <div id="producao">
          <div id="header">
                <h2>Venda</h2>
              </div>
              <h1>Clique vender para remover no Estoqueasy</h1>
            <table class="producao">
                <tr>
                  <th>Nome do produto</th>
                  <th>Quantidade</th>
                </tr>
                <tbody>
                  <tr>
                    <th><input type="text"onChange={(e)=>setProduto(e.target.value)}></input></th>            
                    <th><input type="number"onChange={(e)=>setQtd(e.target.value)}></input></th>
                </tr>                
              </tbody>                               
            </table>
          <button onClick={handleproduce} class="btn_2" id ="vender">Vender</button>          
      </div>
    </div>  
  )
}

export default Venda;
