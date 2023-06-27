import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import Glitch from 'glitch-javascript-sdk';


Glitch.config.Config.setBaseUrl(process.env.REACT_APP_API_URL, true);

Glitch.config.Config.setRootDomain(process.env.REACT_APP_SITE_DOMAIN);

//document.domain = Glitch.config.Config.getRootDomain();

Glitch.config.Config.setAuthToken(Glitch.util.Storage.getAuthToken());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
