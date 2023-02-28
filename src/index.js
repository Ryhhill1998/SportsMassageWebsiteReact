import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import BasicLayout from "./Routes/BasicLayout/basicLayout";
import Home from "./Routes/Home/home.jsx";
import ErrorPage from "./Routes/ErrorPage/errorPage";
import SportsMassage from "./Routes/SportsMassage/sportsMassage";
import SwedishMassage from "./Routes/SwedishMassage/swedishMassage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicLayout/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/sports-massage",
                element: <SportsMassage/>,
            },
            {
                path: "/swedish-massage",
                element: <SwedishMassage/>,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
