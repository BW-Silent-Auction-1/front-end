import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import auctionItems from './reducers/index';
import App from './App';

import './index.css';

const store = configureStore({
  reducer: auctionItems
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);