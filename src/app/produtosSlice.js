import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'not_loaded',
    produtos: [],
    error: null
};

function addProdutoReducer(state, produto){
    let proxId = 1 + state.produtos.map(produtos => produtos.id).reduce((maxId,currId) => Math.max(maxId,currId));
    state.produtos = state.produtos.concat([{...produto, id: proxId, Produzidos:0, Vendidos: 0}]);
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

function deleteProjetoReducer(state, id){
    state.produtos = state.produtos.filter((produto) => produto.id !== id);
}


function  updateProjetoReducer(state, produto){
    let index = state.produtos.map(produto => produto.id).indexOf(produto.id);
    state.produtos.splice(index, 1, produto);
}

export const fetchProdutos = createAsyncThunk('produtos/fetchProdutos',
async () => {
    return await (await fetch('http://localhost:3333/produtos')).json();
});

function fullfillProdutosReducer(produtosState, produtosFetched){
    produtosState.status = 'loaded';
    produtosState.produtos = produtosFetched;

}



export const produtosSlice = createSlice(
    {
        name: 'produtos',
        initialState: initialState,
        reducers: {
            addProduto: (state , action) => addProdutoReducer (state, action.payload),
            Produzir: (state, action) => produzirReducer (state, action.payload),
            Vender: (state, action) => venderReducer (state, action.payload),
            Update: (state,action)=> updateProjetoReducer(state, action.payload),
            Delete: (state,action)=> deleteProjetoReducer(state, action.payload),

        },
        extraReducers: {
            [fetchProdutos.pending]: (state, action) => {state.status = 'loading'},
            [fetchProdutos.fulfilled]: (state, action) => fullfillProdutosReducer(state, action.payload),
            [fetchProdutos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message}
        },
    }
)

export const { addProduto, Produzir, Vender,Update,Delete} = produtosSlice.actions

//useSelector((state) => state.produtos.id)
//useSelector((state) => state.produtos.nomeProduto)
//useSelector((state) => state.produtos.qtdProduto)
//useSelector((state) => state.produtos.custoProduto)
//useSelector((state) => state.produtos.valorProduto)

export default produtosSlice.reducer

  