import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../features/counter/CounterSlice';

export const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})