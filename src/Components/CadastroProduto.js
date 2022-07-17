import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { selectAllMateriasPrimas } from "../app/materiaPrimaSlice";
import { addProdutoServer, updateProdutoServer, selectProdutosById } from "../app/produtosSlice";

/**
*@module Components/CadastroProduto
*/

/**
*@typedef Produto
*@type {object}
*@property {number} id - identificador
*@property {string} nomeProduto - Nome do Produto
*@property {string} qtdProduto - Quantidade de produtos (é uma string mas é tratada como number )
*@property {string} custoProduto - custo para produzir o produto (é uma string mas é tratada como number )
*@property {string} valorProduto - Preço de venda do produto
*@property {number} Vendidos - vezes que foi vendido
*@property {number} Produzidos - vezes que foi produzido
*@property {string} Insumos - Matéria prima que será utilizada na produção deste produto
*/

/**
 * Neste componente é feito o cadastro ou edição de um produto
 * @param {Produto} produto - produto que esta sendo cadastrado ou editado
 */


const CadastroProduto = (props) => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    let {id} = useParams();
    
    const produtoFound = useSelector(state => selectProdutosById(state, id))
    const insumos = useSelector(selectAllMateriasPrimas)

    const [produto, setProduto] = useState(
        id ? produtoFound ?? {} : {});

 
    const [actionType, ] = useState(
        id ? produtoFound 
                ? 'produtos/updateProdutoServer'
                : 'produtos/addProdutoServer'
                : 'produtos/addProdutoServer');
    
   
    const handleChange=(evt)=>{
        const newInput = (fieldValues)=>({...fieldValues, [evt.target.name]:evt.target.value})
        setProduto(newInput)
 
    }
    
    const handleSubmit=(evt) =>{
        const checkEmptyInput = !Object.values(produto).every(fieldValue=>fieldValue==="")
        if(checkEmptyInput){
            if(actionType === 'produtos/addProdutoServer'){
                dispatch(addProdutoServer(produto));
            }
            else if (actionType === 'produtos/updateProdutoServer'){
                dispatch(updateProdutoServer(produto));
            }
            console.log(produto)
            navigate('/home');
            const emptyInput= {nomeProduto:'', qtdProduto:'', custoProduto:'', valorProduto:'', Insumos: ''}
            setProduto(emptyInput)
        }
        
    }

    return (
        <div id="cadastro">
            <div id="header">
                <h2>Cadastro de produtos</h2>
            </div>
            <form id="form_produto" class="cadastro_form">
                <label>Nome do produto</label>
                <input type="text" onChange={handleChange} value={produto.nomeProduto} name="nomeProduto" className="form-control"  placeholder="Nome"/>
                <label>Quantidade</label>
                <input type="number" onChange={handleChange} value={produto.qtdProduto} name="qtdProduto" className="form-control" placeholder="Quantidade"/>
                <label>Custo</label>
                <input type="number" onChange={handleChange} value={produto.custoProduto} name="custoProduto" className="form-control" placeholder="Custo"/>
                <label>Preço</label>
                <input type="number" onChange={handleChange} value={produto.valorProduto} name="valorProduto" className="form-control" placeholder="Valor"/>
                <label>Insumos</label>
                <input list = "Insumos" onChange={handleChange} value={produto.Insumos} name="Insumos" className="form-control" placeholder="Insumo"/>
                <datalist id = "Insumos">
                    {insumos.map((insumos,index)=>(
                        <option value = {insumos.tipo}/>
                     ))}
                </datalist>
                <input type="submit" onClick={handleSubmit} class="btn" />
            </form>
        </div>
    );
}
 
export default CadastroProduto;
