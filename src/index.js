import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Provider } from 'react-redux';
import productStore from './store/store';

import "./localize/i18n"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={productStore}>
    <App />
  </Provider>

  // </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
// //Or you can do it where ever you want, base on user selected language, or something else 
// serviceWorker.unregister();