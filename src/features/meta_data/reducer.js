import { createSlice } from '@reduxjs/toolkit';

const metaDataSlice = createSlice({
    name: 'metaData',
    initialState: {
        currencies: [
            {
                id: 1,
                flagImgUrl: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MM.svg',
                code: 'MMK',
                label: 'Myanmar Kyat'
            },
            {
                id: 2,
                flagImgUrl: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
                code: 'USD',
                label: 'US Dollar'
            },
            {
                id: 3,
                flagImgUrl: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg',
                code: 'JPY',
                label: 'Japanese Yen'
            },
            {
                id: 4,
                flagImgUrl: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/EU.svg',
                code: 'EUR',
                label: 'EURO'
            },
            {
                id: 5,
                flagImgUrl: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TH.svg',
                code: 'THB',
                label: 'Thai Baht'
            }
        ]
    },
    reducers: {
        setCurrencyData: (state, action) => {
            state.currencies = action.payload;
        }
    }
});

export const { 
    setCurrencyData
} = metaDataSlice.actions;

export default metaDataSlice.reducer;