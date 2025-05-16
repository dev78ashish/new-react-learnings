import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import { referalApi } from "./slices/referalApiSlice";
import { blogApi } from "./slices/blogApiSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [referalApi.reducerPath]: referalApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(referalApi.middleware)
            .concat(blogApi.middleware),
});