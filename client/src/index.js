import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./store/index.js"
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <Auth0Provider
          domain='dev-1vxprzx7maxyjwv7.us.auth0.com'
          clientId='CbwboB0RC7xwrSjegPeeYip5otVij30L'
          //redirectUri= {window.location.origin}
          redirectUri='http://localhost:3000/login'
        >
          <App />
        </Auth0Provider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
