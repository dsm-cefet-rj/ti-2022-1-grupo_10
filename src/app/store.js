import { configureStore } from '@reduxjs/toolkit';
import produtosReducer from "./produtosSlice"
import materiaPrimaReducer from './materiaPrimaSlice'

export const store = configureStore({
    reducer: {
        produtos: produtosReducer,
        mps: materiaPrimaReducer,
    }
});