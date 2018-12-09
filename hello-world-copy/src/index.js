import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import {fetchUser} from './actions/authenticationActions'
import { AUTH_USER } from './actions/actionTypes';
import 'babel-polyfill'
const store = configureStore();

const token = localStorage.getItem('token');
// if we have a token, consiger the user to be signed in
if (token) {
    // we need to update application state
    
    // we need to update application state to avoid sign out upon refresh of the page
    store.dispatch({ type: AUTH_USER });
    store.dispatch(fetchUser());
}
//console.log('before fetch user call');
//store.dispatch(fetchUser());
//store.dispatch(loadClients());
//store.dispatch(loadRequirements());
//store.dispatch(loadCandidates());


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
