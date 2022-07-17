// imports
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import {httpGet, httpPost} from '../app/utils'
import {baseUrl} from '../app/baseUrl'

/**
*@module app/vendaSlice

*/

/**
 * Aqui é feito o slice contendo os diferentes reducers a serem utilizados para qualquer interação com a entidade Venda
 * @param {Venda} venda - entidade que será trabalhada neste slice
 */


const vendaAdapter = createEntityAdapter();
const initialState = vendaAdapter.getInitialState({status: 'not_loaded', error: null});


// http methods
export const fetchVendas = createAsyncThunk('venda/fetchVendas', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/venda`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}})
})


export const addVendaServer = createAsyncThunk('venda/addVendaServer', async (venda, {getState}) => {
    console.log(getState());
    return await httpPost(`${baseUrl}/venda`, venda, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}})
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
export default vendaSlice.reducer;

export const {
    selectAll: selectAllVendas,
    selectById: selectVendasById,
    selectIds: selectVendasIds
} = vendaAdapter.getSelectors(state => state.vendas);


