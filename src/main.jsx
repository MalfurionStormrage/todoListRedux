import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // css bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.js';//js del bootstrap

import { registerSW } from "virtual:pwa-register";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

registerSW();