import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from './utils'
import {baseUrl} from './baseUrl'

const fornecedoresAdapter = createEntityAdapter();

const initialState = fornecedoresAdapter.getInitialState ({
    status: 'not_loaded',
    error: null
});


export const fetchFornecedor = createAsyncThunk('fornecedores/fetchFornecedor', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/fornecedores`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deleteFornecedoresServer = createAsyncThunk('fornecedores/deleteFornecedorServer', async ({id}, {getState}) => { 
    await httpDelete(`${baseUrl}/fornecedores/${id}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return id;
});

export const addFornecedorServer = createAsyncThunk('fornecedores/addFornecedorServer', async (fornecedores, {getState}) => {
    return await httpPost(`${baseUrl}/fornecedores`, fornecedores, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateFornecedorServer = createAsyncThunk('fornecedores/updateFornecedorServer', async (fornecedores, {getState}) => {
    return await httpPut(`${baseUrl}/fornecedores/${fornecedores.id}`, fornecedores, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});



export const fornecedorSlice = createSlice(
    {
        name: 'fornecedores',
        initialState: initialState,
        extraReducers: {
            [fetchFornecedor.pending]: (state, action) => {state.status = 'loading'},
            [fetchFornecedor.fulfilled]: (state, action) => {state.status = 'loaded'; fornecedoresAdapter.setAll(state, action.payload);},
            [fetchFornecedor.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
            [deleteFornecedoresServer.pending]: (state, action) => {state.status = 'loading'},
            [deleteFornecedoresServer.fulfilled]: (state, action) => {state.status = 'deleted'; fornecedoresAdapter.removeOne(state, action.payload);},
            [deleteFornecedoresServer.pending]: (state, action) => {state.status = 'loading'},
            [addFornecedorServer.fulfilled]: (state, action) => {state.status = 'saved'; fornecedoresAdapter.addOne(state, action.payload);},
            [addFornecedorServer.pending]: (state, action) => {state.status = 'loading'},
            [addFornecedorServer.fulfilled]: (state, action) => {state.status = 'saved'; fornecedoresAdapter.upsertOne(state, action.payload);},
        },
        
    }
)

export default fornecedorSlice.reducer;

export const {
    selectAll: selectAllFornecedores,
    selectById: selectFornecedoresById,
    selectIds: selectFornecedoresIds
} = fornecedoresAdapter.getSelectors(state => state.fornecedores)