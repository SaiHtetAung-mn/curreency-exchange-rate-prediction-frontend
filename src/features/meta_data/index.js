import { useSelector } from "react-redux";
import useMetaDataActions from "./action"

export const useMetaData = () => {
    const { fetchCurrencyData } = useMetaDataActions();

    const currencies = useSelector(state => state.metaData.currencies);

    return {
        currencies,
        fetchCurrencyData
    }
}

export { default as metadataReducer } from './reducer';