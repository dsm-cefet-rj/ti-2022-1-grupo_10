import { configureStore } from '@reduxjs/toolkit';
import produtosReducer from "./produtosSlice"
import materiaPrimaReducer from './materiaPrimaSlice'
import loginReducer from '../users/LoginSlice'

export const store = configureStore({
    reducer: {
        produtos: produtosReducer,
        materiasprimas: materiaPrimaReducer,
        logins: loginReducer,
    }
});