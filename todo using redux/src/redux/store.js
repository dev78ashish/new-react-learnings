import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/TodoSlice'
import { apiSlice } from "./slices/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        todos: todoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});