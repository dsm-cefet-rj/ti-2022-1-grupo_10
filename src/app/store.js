import { configureStore } from '@reduxjs/toolkit';
import produtosReducer from "./produtosSlice"
import materiaPrimaReducer from './materiaPrimaSlice'
import loginReducer from '../users/LoginSlice'
import signupReducer from '../users/SignupSlice'

export const store = configureStore({
    reducer: {
        produtos: produtosReducer,
        materiasprimas: materiaPrimaReducer,
        logins: loginReducer,
        signups: signupReducer,
        vendas: vendaReducer
    }
});