import { useDispatch, useSelector } from "react-redux"
import { fetchingData, fetchDataFail, fetchDataSuccess } from "./reducer";
import apiRequest from "../../utils/apiRequest";

const useArticleActions = () => {
    const dispatch = useDispatch();

    const articles = useSelector(state => state.article.data);

    function fetchArticles() {
        dispatch(fetchingData());
        const url = `/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&country=us&category=business`;

        apiRequest
        .NewsApi
        .get(url)
        .then(res => {
            const { totalResults, articles } = res.data;
            dispatch(fetchDataSuccess(articles));
        })
        .catch(err => {
            const errMsg = err.response.data || err.message;
            console.error(errMsg);
            dispatch(fetchDataFail());
        })
    }

    function getArticleDetail(articleIndex) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(articles[articleIndex]), 1000);
        })
    }

    return {
        fetchArticles,
        getArticleDetail
    }
}

export default useArticleActions;