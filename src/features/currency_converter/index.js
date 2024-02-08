import { useSelector } from "react-redux";
import useCurrencyConverterActions from "./action"

export const useCurrencyConverter = () => {
    const { convert, fetchHistoryData } = useCurrencyConverterActions();

    const isLoading = useSelector(state => state.currencyConverter.isLoading);
    const isError = useSelector(state => state.currencyConverter.isError);
    const errorMessage = useSelector(state => state.currencyConverter.errorMessage);
    const historyData = useSelector(state => state.currencyConverter.history);

    return {
        isLoading,
        isError,
        errorMessage,
        historyData,
        convert,
        fetchHistoryData
    }
}

export { default as currencyConverterReducer } from './reducer';