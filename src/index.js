import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import BasicLayout from "./Routes/BasicLayout/BasicLayout";
import Home from "./Routes/Home/Home.jsx";
import ErrorPage from "./Routes/ErrorPage/ErrorPage";
import SportsMassage from "./Routes/SportsMassage/SportsMassage";
import SwedishMassage from "./Routes/SwedishMassage/SwedishMassage";
import Reflexology from "./Routes/Reflexology/Reflexology";
import IndianHeadMassage from "./Routes/IndianHeadMassage/IndianHeadMassage";
import StoneTherapy from "./Routes/StoneTherapy/StoneTherapy";
import PeerToPeer from "./Routes/PeerToPeer/PeerToPeer";
import PamperDays from "./Routes/CorporatePamperDays/CorporatePamperDays";
import Acupuncture from "./Routes/Acupuncture/Acupuncture";

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
            {
                path: "/reflexology",
                element: <Reflexology/>,
            },
            {
                path: "/indian-head-massage",
                element: <IndianHeadMassage/>,
            },
            {
                path: "/la-stone-therapy",
                element: <StoneTherapy/>,
            },
            {
                path: "/peer-to-peer",
                element: <PeerToPeer/>,
            },
            {
                path: "/corporate-pamper-days",
                element: <PamperDays/>,
            },
            {
                path: "/acupuncture",
                element: <Acupuncture/>,
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
