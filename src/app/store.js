import { configureStore } from '@reduxjs/toolkit';
import produtosReducer from "./produtosSlice"
import materiaPrimaReducer from './materiaPrimaSlice'
import fornecedorReducer from './fornecedorSlice'
import loginReducer from '../users/LoginSlice'
import signupReducer from '../users/SignupSlice'

export const store = configureStore({
    reducer: {
        produtos: produtosReducer,
        materiasprimas: materiaPrimaReducer,
        fornecedores: fornecedorReducer,
        logins: loginReducer,
        signups: signupReducer
    }
});