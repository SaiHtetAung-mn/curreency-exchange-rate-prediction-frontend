import React, { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom"
import route from '../configs/route';
import RootLayout from "../layouts/RootLayout";
const Home = lazy(() => import('../pages/Home'));
const CurrencyConverter = lazy(() => import('../pages/currency_converter/'));
const ArticleList = lazy(() => import('../pages/article/'));
const ArticleDetail = lazy(() => import('../pages/article/detail'));
const NotFound = lazy(() => import('../components/404'));

const AppRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <RootLayout/>,
            children: [
                {
                    path: '',
                    element: <Home/>,
                },
                {
                    path: route.CurrencyConverter,
                    element: <CurrencyConverter/>,
                },
                {
                    path: route.Article,
                    element: <Outlet/>,
                    children: [
                        {
                            path: '',
                            element: <ArticleList/>,
                        },
                        {
                            path: ':articleId',
                            element: <ArticleDetail/>,
                        },
                    ]
                },
                {
                    path: '*',
                    element: <NotFound/>
                }
            ]
        }
    ])
}

export default AppRoutes;