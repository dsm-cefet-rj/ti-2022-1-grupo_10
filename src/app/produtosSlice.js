import { createSlice } from '@reduxjs/toolkit'

const initialProduto = [{
    id: 1, 
    nomeProduto: 'Brinco', 
    qtdProduto: 2, 
    custoProduto: 25, 
    valorProduto: 30,
    Produzidos: 0,
    Vendidos: 0
}]

function addProdutoReducer(produtos, produto){
    let proxId = 1 + produtos.map(produtos => produtos.id).reduce((maxId,currId) => Math.max(maxId,currId));
    return produtos.concat([{...produto, id: proxId, Produzidos:0, Vendidos: 0}]);
}

function produzirReducer (produtos, {nome,qtd}){

    return produtos.map((produto) => {
        if (produto.nomeProduto !== nome){
            return produto
        }
        return {
            ...produto,qtdProduto:parseInt(produto.qtdProduto)+parseInt(qtd),Produzidos:parseInt(produto.Produzidos)+parseInt(qtd)
        }
    })
}

function venderReducer (produtos, {nome,qtd}){
    
    return produtos.map((produto) => {
        if (produto.nomeProduto !== nome){
            return produto
        }
        return {
            ...produto,qtdProduto:parseInt(produto.qtdProduto)-parseInt(qtd),Vendidos:parseInt(produto.Vendidos)+parseInt(qtd)
        }
    })
}

function deleteProjetoReducer(produtos, id){
    return produtos.filter((produto) => produto.id !== id);
}


function  updateProjetoReducer(produtos, produto){
    let index = produtos.map(produto => produto.id).indexOf(produto.id);
    produtos.splice(index, 1, produto);
    return produtos;
}

export const produtosSlice = createSlice(
    {
        name: 'CadastroProduto',
        initialState: initialProduto,
        reducers: {
            addProduto: (state , action) => addProdutoReducer (state, action.payload),
            Produzir: (state, action) => produzirReducer (state, action.payload),
            Vender: (state, action) => venderReducer (state, action.payload),
            Update: (state,action)=> updateProjetoReducer(state, action.payload),
            Delete: (state,action)=> deleteProjetoReducer(state, action.payload),

        }
    }
)

export const { addProduto, Produzir, Vender,Update,Delete} = produtosSlice.actions

//useSelector((state) => state.produtos.id)
//useSelector((state) => state.produtos.nomeProduto)
//useSelector((state) => state.produtos.qtdProduto)
//useSelector((state) => state.produtos.custoProduto)
//useSelector((state) => state.produtos.valorProduto)

export default produtosSlice.reducer

  