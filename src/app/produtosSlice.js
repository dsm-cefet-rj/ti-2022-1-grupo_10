import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../app/utils'
import {baseUrl} from '../app/baseUrl'

const produtosAdapter = createEntityAdapter();

const initialState = produtosAdapter.getInitialState ({
    status: 'not_loaded',
    error: null
});


export const fetchProdutos = createAsyncThunk('produtos/fetchProdutos', async () => {
    return await httpGet(`${baseUrl}/produtos`);
});

export const deleteProdutoServer = createAsyncThunk('produtos/deleteProdutoServer', async ({id}) => {
    await httpDelete(`${baseUrl}/produtos/${id}`);
    return id;
});

export const addProdutoServer = createAsyncThunk('produtos/addProdutoServer', async (produto) => {
    produto.Produzidos = 0
    produto.Vendidos = 0
    return await httpPost(`${baseUrl}/produtos`, produto);
});

export const updateProdutoServer = createAsyncThunk('produtos/updateProdutoServer', async (produto) => {
    return await httpPut(`${baseUrl}/produtos/${produto.id}`, produto);
});



export const produtosSlice = createSlice(
    {
        name: 'produtos',
        initialState: initialState,
        extraReducers: {
            [fetchProdutos.pending]: (state, action) => {state.status = 'loading'},
            [fetchProdutos.fulfilled]: (state, action) => {state.status = 'loaded'; produtosAdapter.setAll(state, action.payload);},
            [fetchProdutos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
            [deleteProdutoServer.pending]: (state, action) => {state.status = 'loading'},
            [deleteProdutoServer.fulfilled]: (state, action) => {state.status = 'deleted'; produtosAdapter.removeOne(state, action.payload);},
            [deleteProdutoServer.pending]: (state, action) => {state.status = 'loading'},
            [addProdutoServer.fulfilled]: (state, action) => {state.status = 'saved'; produtosAdapter.addOne(state, action.payload);},
            [addProdutoServer.pending]: (state, action) => {state.status = 'loading'},
            [addProdutoServer.fulfilled]: (state, action) => {state.status = 'saved'; produtosAdapter.upsertOne(state, action.payload);},
        },
    }
)

export const {Produzir, Vender} = produtosSlice.actions

export default produtosSlice.reducer

export const {
    selectAll: selectAllProdutos,
    selectById: selectProdutosById,
    selectIds: selectProdutosIds
} = produtosAdapter.getSelectors(state => state.produtos)

  
