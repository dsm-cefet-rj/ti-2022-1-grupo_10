import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllMateriasPrimas, updateMateriaPrimaServer } from "../app/materiaPrimaSlice";
import { selectAllProdutos, updateProdutoServer} from "../app/produtosSlice";

/**
*@module Components/Producao
*/

/**
 * Neste componente é feito a produção de um produto, aumentando a quantidade em estoque e a variavel "Produzidos"
 * @param {Produto} produto - produto a ser produzido
 * @param {string} tasks - nome do produto a ser produzido
 * @param {string} Qtd - quantidade a ser produzida
 */

 
const Producao = () => {

  const dispatch = useDispatch();
  const produtos = useSelector(selectAllProdutos)
  const insumos = useSelector(selectAllMateriasPrimas)
  const navigate = useNavigate();
  

  const [tasks,setTasks]=useState([
    {
      nome:"nome produto"
    },    
  ]);

  
const handleproduce = ()=>{
  let produto = produtos.find((item)=>item.nomeProduto.includes(tasks))
  produto = {...produto, qtdProduto: parseInt(produto.qtdProduto) + parseInt(Qtd), Produzidos: parseInt(produto.Produzidos) + parseInt(Qtd)}
  let insumo = insumos.find((item)=>item.tipo.includes(produto.Insumos))
  const quantidadeInsumo = parseInt(insumo.qtd)
  if (quantidadeInsumo < Qtd){
    alert("Materia prima " + insumo.tipo + " Insuficiente")
  }
  else{
    insumo = {...insumo, qtd: quantidadeInsumo - parseInt(Qtd), usos: parseInt(insumo.usos) + parseInt(Qtd)}
    dispatch(updateProdutoServer(produto))
    dispatch(updateMateriaPrimaServer(insumo))
    navigate('/relatorioProduto')
  }
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
              <th><input list = "Produtos" onChange={(e)=>setTasks(e.target.value)} name="Insumos"/>
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
        <button type="menu" onClick={handleproduce} class="btn_3">produzir</button>
      </div>
    </div>
  )
}

export default Producao;