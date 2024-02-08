import { useDispatch } from "react-redux"
import { setCurrencyData } from "./reducer";
import apiRequest from '../../utils/apiRequest';

const useMetaDataActions = () => {
    const dispatch = useDispatch();

    function fetchCurrencyData() {
        const url = '/currencies';

        apiRequest.Backend
        .get(url)
        .then(res => {
            dispatch(setCurrencyData(res.data));
        });
    }

    return {
        fetchCurrencyData
    }
}

export default useMetaDataActions;