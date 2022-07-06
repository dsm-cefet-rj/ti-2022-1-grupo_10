// imports
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../app/utils'
import {baseUrl} from '../app/baseUrl'


const vendaAdapter = createEntityAdapter();
const initialState = vendaAdapter.getInitialState({status: 'not_loaded', error: null});


// http methods
export const fetchVendas = createAsyncThunk('vendas/fetchVendas', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/vendas`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}})
})


export const addVendaServer = createAsyncThunk('vendas/addVendaServer', async (venda, {getState}) => {
    console.log(getState());
    return await httpPost(`${baseUrl}/vendas`, venda, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}})
})


export const vendaSlice = createSlice(
    {
        name: 'vendas',
        initialState: initialState,
        extraReducers: {
            [fetchVendas.pending]: (state, action) => {state.status = 'loading'},
            [fetchVendas.fulfilled]: (state, action) => {state.status = 'loaded'; vendaAdapter.setAll(state, action.payload);},
            [fetchVendas.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message;},
            [addVendaServer.pending]: (state, action) => {state.status = 'loading'},
            [addVendaServer.fulfilled]: (state, action) => {state.status = 'saved'; vendaAdapter.addOne(state, action.payload);}
        }
    }
)


export const {
    selectAll: selectAllVendas,
    selectById: selectVendasById,
    selectIds: selectVendasIds
} = vendaAdapter.getSelectors(state => state.venda);


export default vendaSlice.reducer;