import { configureStore } from "@reduxjs/toolkit";
import StopwatchReducer from './slices/StopwatchSlice';
import ThemeReducer from './slices/ThemeSlice';

export const store = configureStore({
    reducer: {
        stopwatch: StopwatchReducer,
        theme: ThemeReducer
    }
})