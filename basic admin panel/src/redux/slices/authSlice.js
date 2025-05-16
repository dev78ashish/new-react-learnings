import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
}; 

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const token = action.payload
            localStorage.setItem('token', token);
            state.isAuthenticated=true;
        },
        logout(state) {
            localStorage.removeItem("token");
            state.isAuthenticated=false;
        },
    },
});

export const { login, logout } = authSlice.actions

export default authSlice.reducer;