import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import App from './components/app';
import routes from './routes';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);



ReactDOM.render(
  <Router history={browserHistory} routes={routes} />
  , document.getElementById('app'));
