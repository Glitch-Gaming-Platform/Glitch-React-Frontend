import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Glitch from 'glitch-javascript-sdk';

Glitch.config.Config.setBaseUrl(process.env.REACT_APP_API_URL, true);
Glitch.config.Config.setRootDomain(process.env.REACT_APP_SITE_DOMAIN);
Glitch.config.Config.setAuthToken(Glitch.util.Storage.getAuthToken());

const rootElement = document.getElementById('root');

// Check if the app is running in a browser
if (rootElement.hasChildNodes()) {
  // Hydrate the app if it's already rendered to static HTML by react-snap
  ReactDOM.hydrateRoot(
    rootElement,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  // Render the app normally
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

reportWebVitals();
