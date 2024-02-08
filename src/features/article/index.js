import { useSelector } from "react-redux";
import useArticleActions from "./action";

export const useArticle = () => {
    const { fetchArticles, getArticleDetail } = useArticleActions();

    const economicArticles = useSelector(state => state.article.data);
    const isLoading = useSelector(state => state.article.isLoading);

    return {
        economicArticles,
        isLoading,
        fetchArticles,
        getArticleDetail
    }
}

export { default as articleReducer } from './reducer';