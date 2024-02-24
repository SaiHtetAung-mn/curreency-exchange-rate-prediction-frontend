import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import { 
  themeReducer, 
  articleReducer, 
  metadataReducer, 
  currencyConverterReducer,
  currencyPredictionReducer
} from './features';

const reducer = combineReducers({
    theme: themeReducer,
    article: articleReducer,
    metaData: metadataReducer,
    currencyConverter: currencyConverterReducer,
    prediction: currencyPredictionReducer
});

export const store = configureStore({
  reducer,
})