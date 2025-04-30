import { createSlice } from "@reduxjs/toolkit";

export const StopwatchSlice = createSlice({
    name: 'stopwatch',
    initialState: {
        running: false,
        ticks: 0
    },
    reducers: {
        start: (state) => {
            state.running = true;
        },
        stop: (state) => {
            state.running = false;
        },  
        restart: (state) => {
            state.running = false;
            state.ticks = 0;
        },
        tick: (state) => {
            state.ticks += 1;
        }
    }
});

export const { start, stop, restart, tick } = StopwatchSlice.actions;

export default StopwatchSlice.reducer;