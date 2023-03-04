import React from 'react';
import ReactDOM from 'react-dom/client';

import store from './redux/store.js';
import { Provider } from 'react-redux';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import BasicLayout from "./routes/BasicLayout/BasicLayout";
import Home from "./routes/Home/Home.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import SportsMassage from "./routes/SportsMassage/SportsMassage";
import SwedishMassage from "./routes/SwedishMassage/SwedishMassage";
import Reflexology from "./routes/Reflexology/Reflexology";
import IndianHeadMassage from "./routes/IndianHeadMassage/IndianHeadMassage";
import StoneTherapy from "./routes/StoneTherapy/StoneTherapy";
import PeerToPeer from "./routes/PeerToPeer/PeerToPeer";
import PamperDays from "./routes/CorporatePamperDays/CorporatePamperDays";
import Acupuncture from "./routes/Acupuncture/Acupuncture";
import FAQs from "./routes/FAQs/FAQs";

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
            {
                path: "/faqs",
                element: <FAQs/>,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
