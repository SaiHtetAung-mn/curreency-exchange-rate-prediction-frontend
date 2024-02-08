import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import { 
  themeReducer, 
  articleReducer, 
  metadataReducer, 
  currencyConverterReducer 
} from './features';

const reducer = combineReducers({
    theme: themeReducer,
    article: articleReducer,
    metaData: metadataReducer,
    currencyConverter: currencyConverterReducer
});

export const store = configureStore({
  reducer,
})