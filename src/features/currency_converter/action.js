import { useDispatch } from "react-redux"
import { 
    fetchingData,
    fetchDataSuccess,
    fetchDataFail,
    fetchingHistoryData,
    fetchHistoryDataSuccess,
    fetchHistoryDataFail
} from "./reducer";
import apiRequest from '../../utils/apiRequest';
import dayjs from "dayjs";

const useCurrencyConverterActions = () => {
    const dispatch = useDispatch();

    async function convert(from, to, value) {
        try {
            dispatch(fetchingData());
            const url = `v3/latest?base_currency=${from}&currencies=${to}`;
            const res = await apiRequest.CurrencyAPI.get(url);
            const { meta: { last_updated_at }, data } = res.data;
            console.log(last_updated_at)
            const result = (value*data[to]["value"] ?? 0).toFixed(2);

            dispatch(fetchDataSuccess());
            // return { lastUpdatedAt: '2024-02-03T23:59:59Z', resultVal: 3500 }
            return { lastUpdatedAt: last_updated_at, resultVal: result }
        }
        catch(err) {
            dispatch(fetchDataFail());
            console.error(err);
            return { lastUpdatedAt: null, resultVal: null }
        }
    }

    async function fetchHistoryData({ startDate, from, to}) {
        try {
            dispatch(fetchingHistoryData());
            const endDate = new Date().toISOString();
            const url = `v1/historic_rate/period.json?from=${from}&to=${to}&start_timestamp=${startDate}&end_timestamp=${endDate}`;

            const res = await apiRequest.XeApi.get(url);
            const { to: { [to]: data } } = res.data;
            const modifiedData = data.map(item => ({
                date: dayjs(item.timestamp).format("MMM DD"),
                value: Number(item.mid).toFixed(2)
            }));
            dispatch(fetchHistoryDataSuccess(modifiedData));
        }
        catch(err) {
            console.error(err);
            dispatch(fetchHistoryDataFail());
        }
    }

    return {
        convert,
        fetchHistoryData
    }
}

export default useCurrencyConverterActions;