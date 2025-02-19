import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
