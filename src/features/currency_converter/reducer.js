import { createSlice } from '@reduxjs/toolkit';

const currencyConverterSlice = createSlice({
    name: 'currencyConverter',
    initialState: {
        history: {
            data: [
                {
                    "date": "Jan 10",
                    "value": "2096.87"
                },
                {
                    "date": "Jan 11",
                    "value": "2099.33"
                },
                {
                    "date": "Jan 12",
                    "value": "2098.00"
                },
                {
                    "date": "Jan 13",
                    "value": "2099.01"
                },
                {
                    "date": "Jan 14",
                    "value": "2095.81"
                },
                {
                    "date": "Jan 15",
                    "value": "2098.71"
                },
                {
                    "date": "Jan 16",
                    "value": "2098.14"
                },
                {
                    "date": "Jan 17",
                    "value": "2101.73"
                },
                {
                    "date": "Jan 18",
                    "value": "2097.88"
                },
                {
                    "date": "Jan 19",
                    "value": "2100.27"
                },
                {
                    "date": "Jan 20",
                    "value": "2100.23"
                },
                {
                    "date": "Jan 21",
                    "value": "2096.43"
                },
                {
                    "date": "Jan 22",
                    "value": "2097.59"
                },
                {
                    "date": "Jan 23",
                    "value": "2097.45"
                },
                {
                    "date": "Jan 24",
                    "value": "2097.57"
                },
                {
                    "date": "Jan 25",
                    "value": "2099.56"
                },
                {
                    "date": "Jan 26",
                    "value": "2098.98"
                },
                {
                    "date": "Jan 27",
                    "value": "2099.60"
                },
                {
                    "date": "Jan 28",
                    "value": "2096.44"
                },
                {
                    "date": "Jan 29",
                    "value": "2101.30"
                },
                {
                    "date": "Jan 30",
                    "value": "2100.96"
                },
                {
                    "date": "Jan 31",
                    "value": "2100.70"
                },
                {
                    "date": "Feb 01",
                    "value": "2098.07"
                },
                {
                    "date": "Feb 02",
                    "value": "2099.25"
                },
                {
                    "date": "Feb 03",
                    "value": "2099.76"
                },
                {
                    "date": "Feb 04",
                    "value": "2096.43"
                }
            ],
            isLoading: false,
            isError: false
        },
        isLoading: false,
        isError: false,
        errorMessage: null
    },
    reducers: {
        fetchingHistoryData: (state) => {
            state.history.isLoading = true;
            state.history.isError = false;
        },
        fetchHistoryDataSuccess: (state, action) => {
            state.history.isLoading = false;
            state.history.isError = false;
            state.history.data = action.payload;
        },
        fetchHistoryDataFail: (state) => {
            state.history.isLoading = false;
            state.history.isError = true;
        },
        fetchingData: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = null;
        },
        fetchDataSuccess: (state) => {
            state.isLoading = false;
            state.isError = false;
        },
        fetchDataFail: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload;
        }
    }
});

export const { 
    fetchDataFail,
    fetchDataSuccess,
    fetchingData,
    fetchingHistoryData,
    fetchHistoryDataFail,
    fetchHistoryDataSuccess,
    setHistoryDataFrom,
    setHistoryDataTo,
    setHistoryDataStartDate,
    setHistoryDataEndDate
} = currencyConverterSlice.actions;

export default currencyConverterSlice.reducer;