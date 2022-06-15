import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../app/utils'
import {baseUrl} from '../app/baseUrl'

const materiasprimasAdapter = createEntityAdapter();

const initialState = materiasprimasAdapter.getInitialState ({
    status: 'not_loaded',
    error: null
});


export const fetchMateriasPrimas = createAsyncThunk('materiasprimas/fetchfetchMateriasPrimas', async () => {
    return await httpGet(`${baseUrl}/materiasprimas`);
});

export const deleteMateriaPrimaServer = createAsyncThunk('materiasprimas/deleteMateriaPrimaServer', async ({id}) => {
    await httpDelete(`${baseUrl}/materiasprimas/${id}`);
    return id;
});

export const addMateriaPrimaServer = createAsyncThunk('materiasprimas/addMateriaPrimaServer', async (materiaPrima) => {
    materiaPrima.qtdUsos = 0
    return await httpPost(`${baseUrl}/materiasprimas`, materiaPrima);
});

export const updateMateriaPrimaServer = createAsyncThunk('materiasprimas/updateMateriaPrimaServer', async (materiaPrima) => {
    return await httpPut(`${baseUrl}/materiasprimas/${materiaPrima.id}`, materiaPrima);
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