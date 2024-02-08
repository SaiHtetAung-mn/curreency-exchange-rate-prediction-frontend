import axios from "axios";

const BACKEND_URL = 'http://localhost:8080';
const NEWS_API_URL = 'https://newsapi.org';
const CURRENCY_API_URL = 'https://api.currencyapi.com';
const XE_API_URL = 'https://xecdapi.xe.com';

function createApiRequest(baseURL, headers=null) {
    const reqHeaders = {};
    if(headers) {
        const [key, value] = Object.entries(headers)[0];
        reqHeaders[key] = value;
    }

    return axios.create({
        baseURL,
        headers: reqHeaders
    });
}

function encodeBasicAuth(username, password) {
    const encoded = btoa(`${username}:${password}`);
    return `Basic ${encoded}`;
}


export default {
    NewsApi: createApiRequest(NEWS_API_URL),
    Backend: createApiRequest(BACKEND_URL),
    CurrencyAPI: createApiRequest(CURRENCY_API_URL, { "apikey": ""+process.env.REACT_APP_CURRENCY_API_KEY }),
    XeApi: createApiRequest(XE_API_URL, { "Authorization": encodeBasicAuth(process.env.REACT_APP_XE_API_USERNAME, process.env.REACT_APP_XE_API_PASSWORD) })
}