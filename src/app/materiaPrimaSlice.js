import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
        status: 'not_loaded',
        mps: [],
        error: null
    };


function addMateriaPrimaReducer(state,mp){
    let proxId = 1 + state.mps.map(m => m.id).reduce((maxId,currId) => Math.max(maxId,currId));
    state.mps = state.mps.concat([{...mp, id: proxId, qtdUsos: 0}]);
}

export const fetchMps = createAsyncThunk('mp/fetchMps',
async () => {
    return await (await fetch('http://localhost:3333/mp')).json();
});

function fullfillMpReducer(MpsState, MpsFetched){
    MpsState.status = 'loaded';
    MpsState.mps = MpsFetched;
}



export const materiaPrimaSlice = createSlice(
    {
        name: 'mps',
        initialState: initialState,
        reducers: {
            addMateriaPrima: (state,action) => addMateriaPrimaReducer(state,action.payload)
        },
        extraReducers: {
            [fetchMps.pending]: (state, action) => {state.status = 'loading'},
            [fetchMps.fulfilled]: (state, action) => fullfillMpReducer(state, action.payload),
            [fetchMps.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message}
        },
        
    }
)

export const {addMateriaPrima} = materiaPrimaSlice.actions;
export default materiaPrimaSlice.reducer;