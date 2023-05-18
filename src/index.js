import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import Glitch from 'glitch-javascript-sdk';
import Storage from './util/Storage';


Glitch.config.Config.setBaseUrl("https://api.glitch.local/api", true);

Glitch.config.Config.setAuthToken(Storage.getAuthToken());

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
