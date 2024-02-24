import { useDispatch } from "react-redux"
import { 
    setCurrencyData,
    fetchingCurrencyRate,
    fetchCurrencyRateSuccess,
    fetchCurrencyRateFail
} from "./reducer";
import apiRequest from '../../utils/apiRequest';

const useMetaDataActions = () => {
    const dispatch = useDispatch();

    function fetchCurrencyData() {
        const url = '/currencies/';

        apiRequest.Backend.get(url)
        .then(res => {
            dispatch(setCurrencyData(res.data));
        })
        .catch(err => console.log(err));
    }

    function fetchLatestCurrencyRate() {
        dispatch(fetchingCurrencyRate());
        const url = '/currency-rates/latest';
        apiRequest.Backend.get(url)
        .then(res => {
            dispatch(fetchCurrencyRateSuccess(res.data));
        })
        .catch(() => dispatch(fetchCurrencyRateFail()));
    }

    return {
        fetchCurrencyData,
        fetchLatestCurrencyRate
    }
}

export default useMetaDataActions;