import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        setDarkMode: (state) => {
            state.isDarkMode = true;
        },
        setLightMode: (state) => {
            state.isDarkMode = false;
        },
    }
});

export const { toggleTheme, setDarkMode, setLightMode } = ThemeSlice.actions;
export default ThemeSlice.reducer;