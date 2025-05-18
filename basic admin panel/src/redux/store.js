import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import { referalApi } from "./slices/referalApiSlice";
import { blogApi } from "./slices/blogApiSlice";
import { tierApi } from "./slices/tierApiSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [referalApi.reducerPath]: referalApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        [tierApi.reducerPath]: tierApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(referalApi.middleware)
            .concat(blogApi.middleware)
            .concat(tierApi.middleware)
});