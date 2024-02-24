import { useSelector } from "react-redux";
import useCurrencyPredictionActions from "./action"

export const useCurrencyPrediction = () => {
    const { predict } = useCurrencyPredictionActions();

    const isLoading = useSelector(state => state.prediction.isLoading);
    const isError = useSelector(state => state.prediction.isError);

    return {
        isLoading,
        isError,
        predict
    }
}

export { default as currencyPredictionReducer } from './reducer';