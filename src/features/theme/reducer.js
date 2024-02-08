import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'dark',
        isDrawerOpen: false
    },
    reducers: {
        changeThemeMode: (state) => {
            state.mode = state.mode == 'light' ? 'dark' : 'light';
        }, 
        changeDrawer: (state) => {
            state.isDrawerOpen = !state.isDrawerOpen;
        }
    }
});

export const { 
    changeThemeMode,
    changeDrawer
} = themeSlice.actions;

export default themeSlice.reducer;