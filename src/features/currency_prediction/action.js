import { useDispatch } from "react-redux"
import { predicting, predictionFail, predictionSuccess } from "./reducer";
import apiRequest from '../../utils/apiRequest';

const useCurrencyPredictionActions = () => {
    const dispatch = useDispatch();

    async function predict(to, date) {
        return new Promise((resolve, reject) => {
            dispatch(predicting());
            const url = `/currency-rates/predict?currency=${to}&date=${date}`;
            apiRequest.Backend.get(url).then(res => {
                setTimeout(() => {
                    resolve(res.data);
                    dispatch(predictionSuccess());
                }, 5000);
            })
            .catch(err => {
                setTimeout(() => dispatch(predictionFail()), 3000);
            })
        })
    }

    return {
        predict
    }
}

export default useCurrencyPredictionActions;