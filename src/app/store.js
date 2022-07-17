import { configureStore } from '@reduxjs/toolkit';
import produtosReducer from "./produtosSlice"
import materiaPrimaReducer from './materiaPrimaSlice'
import fornecedorReducer from './fornecedorSlice'
import loginReducer from '../users/LoginSlice'
import signupReducer from '../users/SignupSlice'
import vendaReducer from './vendaSlice';

/**
*@module app/store
*/

/**
* Aqui contêm o store que guarda e transmite todos os reducers e dados a serem utilizados pelos componentes
*/


export const store = configureStore({
    reducer: {
        produtos: produtosReducer,
        materiasprimas: materiaPrimaReducer,
        fornecedores: fornecedorReducer,
        logins: loginReducer,
        signups: signupReducer,
        vendas: vendaReducer
    }
});