import { useSelector } from "react-redux";
import useMetaDataActions from "./action"

export const useMetaData = () => {
    const { 
        fetchCurrencyData,
        fetchLatestCurrencyRate
    } = useMetaDataActions();

    const currencies = useSelector(state => state.metaData.currencies);
    const latestCurrencyRate = useSelector(state => state.metaData.latestCurrencyRate);

    return {
        currencies,
        latestCurrencyRate,
        fetchCurrencyData,
        fetchLatestCurrencyRate
    }
}

export { default as metadataReducer } from './reducer';