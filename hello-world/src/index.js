import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import {loadClients} from './actions/catActions';

const store = configureStore();

// 1. Call dispatch on the store with an argument of this action that makes an API request
// 2. The loadCourses() action is invoked, which makes an API call, and dispatches the loadCoursesSuccess action
// 3. that action: store -> root reducer -> courses reducer
// 4. courses reducer handles that action, recieves course payload and return new state that has courses: courses payload
// 5. the CoursesPage component is connected to the store, so store's new state triggers the mapStateToProps function, which triggers the render function on that component
store.dispatch(loadClients());
// store.dispatch(loadHobbies());


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
