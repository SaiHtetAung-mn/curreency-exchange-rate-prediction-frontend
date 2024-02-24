import { useDispatch } from "react-redux"
import { predicting, predictionFail, predictionSuccess } from "./reducer";
import apiRequest from '../../utils/apiRequest';

const useCurrencyPredictionActions = () => {
    const dispatch = useDispatch();

    async function predict(to, date) {
        return new Promise((resolve, reject) => {
            dispatch(predicting());
            const url = `/predict?to=${to}&date=${date}`;
            apiRequest.Backend.get(url).then(res => {

            })
            .catch(err => {
                setTimeout(() => dispatch(predictionFail()), 3000);
            })
        })
        // try {
        //     dispatch(predicting());
        //     const url = `/predict?to=${to}&date=${date}`;
        //     const res = await apiRequest.Backend.get(url);
        //     const { result } = res.data;
        //     dispatch(predictionSuccess());
        //     return result;
        // }
        // catch(err) {
        //     console.error(err);
        //     dispatch(predictionFail());
        //     return { result: null }
        // }
    }

    return {
        predict
    }
}

export default useCurrencyPredictionActions;