import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // css bootstrap
import { registerSW } from "virtual:pwa-register";

import { Provider } from "react-redux";
import { todoListRedux } from './store/todoListRedux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={todoListRedux.store}>
      <PersistGate loading={null} persistor={todoListRedux.persistStoree}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

registerSW();