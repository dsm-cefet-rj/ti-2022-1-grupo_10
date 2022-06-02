import { configureStore } from '@reduxjs/toolkit';
import produtosReducer from "./produtosSlice"
import materiaPrimaReducer from './materiaPrimaSlice'

export default configureStore({
    reducer: {
        produtos: produtosReducer,
        mps: materiaPrimaReducer,
    }
});