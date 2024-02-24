import { createSlice } from '@reduxjs/toolkit';

const metaDataSlice = createSlice({
    name: 'metaData',
    initialState: {
        currencies: [],
        latestCurrencyRate: {
            data: [],
            isLoading: false
        }
    },
    reducers: {
        setCurrencyData: (state, action) => {
            state.currencies = action.payload;
        },
        fetchingCurrencyRate: (state) => {
            state.latestCurrencyRate.isLoading = true;
        },
        fetchCurrencyRateSuccess: (state, action) => {
            state.latestCurrencyRate.isLoading = false;
            state.latestCurrencyRate.data = action.payload || [];
        },
        fetchCurrencyRateFail: (state) => {
            state.latestCurrencyRate.isLoading = false;
        }
    }
});

export const { 
    setCurrencyData,
    fetchingCurrencyRate,
    fetchCurrencyRateSuccess,
    fetchCurrencyRateFail
} = metaDataSlice.actions;

export default metaDataSlice.reducer;