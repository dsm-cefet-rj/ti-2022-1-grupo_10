import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpPost} from '../app/utils'
import {baseUrl} from '../app/baseUrl'

const signupAdapter = createEntityAdapter();

const initialState = signupAdapter.getInitialState({
    status: 'not_loaded',
    error: null,
    currentToken: null
    /* o array user foi removido do state inicial, será criado pelo adapter */
});


export const signupServer = createAsyncThunk('users/signupServer', async (signup) => {
    return await httpPost(`${baseUrl}/users/signup`, signup);
});

export const signupSlice = createSlice({
    name: 'signups',
    initialState: initialState,
    extraReducers: {
       [signupServer.pending]: (state, action) => {state.status = 'trying_signup'},
       [signupServer.fulfilled]: (state, action) => {state.status = 'signup_sucessful'; signupAdapter.addOne(state, action.payload); state.currentToken = action.payload.token },
    },
})

export default signupSlice.reducer

export const {
    selectAll: selectAllsignup,
} = signupAdapter.getSelectors(state => state.signup)