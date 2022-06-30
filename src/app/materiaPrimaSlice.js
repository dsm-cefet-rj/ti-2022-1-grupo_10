import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../app/utils'
import {baseUrl} from '../app/baseUrl'

const materiasprimasAdapter = createEntityAdapter();

const initialState = materiasprimasAdapter.getInitialState ({
    status: 'not_loaded',
    error: null
});


export const fetchMateriasPrimas = createAsyncThunk('materiasprimas/fetchfetchMateriasPrimas', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/materiasprimas`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deleteMateriaPrimaServer = createAsyncThunk('materiasprimas/deleteMateriaPrimaServer', async ({id}, {getState}) => { 
    await httpDelete(`${baseUrl}/materiasprimas/${id}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return id;
});

export const addMateriaPrimaServer = createAsyncThunk('materiasprimas/addMateriaPrimaServer', async (materiaPrima, {getState}) => {
    materiaPrima.qtdUsos = 0
    return await httpPost(`${baseUrl}/materiasprimas`, materiaPrima, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateMateriaPrimaServer = createAsyncThunk('materiasprimas/updateMateriaPrimaServer', async (materiaPrima, {getState}) => {
    return await httpPut(`${baseUrl}/materiasprimas/${materiaPrima.id}`, materiaPrima, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});



export const materiaPrimaSlice = createSlice(
    {
        name: 'materiasprimas',
        initialState: initialState,
        extraReducers: {
            [fetchMateriasPrimas.pending]: (state, action) => {state.status = 'loading'},
            [fetchMateriasPrimas.fulfilled]: (state, action) => {state.status = 'loaded'; materiasprimasAdapter.setAll(state, action.payload);},
            [fetchMateriasPrimas.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
            [deleteMateriaPrimaServer.pending]: (state, action) => {state.status = 'loading'},
            [deleteMateriaPrimaServer.fulfilled]: (state, action) => {state.status = 'deleted'; materiasprimasAdapter.removeOne(state, action.payload);},
            [deleteMateriaPrimaServer.pending]: (state, action) => {state.status = 'loading'},
            [addMateriaPrimaServer.fulfilled]: (state, action) => {state.status = 'saved'; materiasprimasAdapter.addOne(state, action.payload);},
            [addMateriaPrimaServer.pending]: (state, action) => {state.status = 'loading'},
            [addMateriaPrimaServer.fulfilled]: (state, action) => {state.status = 'saved'; materiasprimasAdapter.upsertOne(state, action.payload);},
        },
        
    }
)

export default materiaPrimaSlice.reducer;

export const {
    selectAll: selectAllMateriasPrimas,
    selectById: selectMateriasPrimasById,
    selectIds: selectMateriasPrimasIds
} = materiasprimasAdapter.getSelectors(state => state.materiasprimas)