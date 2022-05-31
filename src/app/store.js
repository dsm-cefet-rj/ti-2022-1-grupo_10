import { configureStore } from '@reduxjs/toolkit';
import produtosReducer from "./produtosSlice"

export default configureStore({
    reducer: {
        produtos: produtosReducer,
    }
});