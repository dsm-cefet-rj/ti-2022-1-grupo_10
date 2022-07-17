import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpPost} from '../app/utils'
import {baseUrl} from '../app/baseUrl'

/**
*@module users/LoginSlice
*/

/**
 * Aqui é feito o slice contendo os diferentes reducers a serem utilizados para qualquer interação com a entidade Usuário
 * @param {Login} login - entidade que será trabalhada neste slice
 */

const loginAdapter = createEntityAdapter();

const initialState = loginAdapter.getInitialState({
    status: 'not_loaded',
    error: null,
    currentToken: null
    /* o array user foi removido do state inicial, será criado pelo adapter */
});


export const loginServer = createAsyncThunk('users/loginServer', async (login) => {
    return await httpPost(`${baseUrl}/users/login`, login);
});

export const loginSlice = createSlice({
    name: 'logins',
    initialState: initialState,
    extraReducers: {
       [loginServer.pending]: (state, action) => {state.status = 'trying_login'},
       [loginServer.fulfilled]: (state, action) => {state.status = 'logged_in'; loginAdapter.addOne(state, action.payload); state.currentToken = action.payload.token },
       [loginServer.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message}
    },
})

export default loginSlice.reducer

export const {
    selectAll: selectAllLogin,
} = loginAdapter.getSelectors(state => state.login)