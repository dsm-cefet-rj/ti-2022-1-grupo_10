import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  selectAllProdutos, updateProdutoServer } from "../app/produtosSlice";
import { addVendaServer } from "../app/vendaSlice";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

/**
*@module Components/Venda
*/

/**
*@typedef Venda
*@type {object}
*@property {number} id - identificador
*@property {string} produto - produto que foi vendido
*@property {number} qtd - Quantidade que foi vendida
*@property {number} lucro - lucro obtido na venda fazendo o cálculo a partir do custo de produção e de venda do produto
*/

/**
 * Neste componente é feito a venda de um produto, diminuindo a quantidade em estoque, aumentando a variavel "Vendidos" de produto e adicionando uma venda na entidade de Vendas
 * @param {Produto} produto - produto a ser vendido
 * @param {string} Produto - nome do produto a ser vendido
 * @param {string} Qtd - quantidade a ser vendida
 * @param {Venda} venda - venda a ser registrada no banco de dados
 */

const Venda = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const produtos = useSelector(selectAllProdutos)
  const [Produto,setProduto]=useState("");
  const [Qtd,setQtd]=useState("");


const handleproduce = (e)=>{
  let produto = produtos.find((item)=>item.nomeProduto.includes(Produto))
  if(parseInt(Qtd) <= produto.qtdProduto){
    produto = {...produto, qtdProduto: parseInt(produto.qtdProduto) - parseInt(Qtd), Vendidos: parseInt(produto.Vendidos) + parseInt(Qtd)}
    dispatch(updateProdutoServer(produto))
    let venda = {produto: produto.nomeProduto, qtd: parseInt(Qtd), lucro: (produto.valorProduto - produto.custoProduto) * parseInt(Qtd)};
    dispatch(addVendaServer(venda));
    navigate('/relatorioVenda')
  }
  else{
    toast.error('Estoque insuficiente!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
}


return (
    <div id="produzir">
      <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                    <th>
                        <input list = "Produtos" onChange={(e)=>setProduto(e.target.value)} name="Produtos"/>
                        <datalist id = "Produtos">
                            {produtos.map((produtos,index)=>(
                                <option key={index} value = {produtos.nomeProduto}/>
                            ))}
                        </datalist>
                    </th>           
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
