import { createSlice } from '@reduxjs/toolkit';

const currencyPredictionSlice = createSlice({
    name: 'prediction',
    initialState: {
        isLoading: false,
        isError: false,
        errorMessage: ''
    },
    reducers: {
        predicting: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        predictionSuccess: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.errorMessage = '';
        },
        predictionFail: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload ?? '';
        }
    }
});

export const { 
    predicting,
    predictionSuccess,
    predictionFail
} = currencyPredictionSlice.actions;

export default currencyPredictionSlice.reducer;