import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {

  const composeEnhancers = composeWithDevTools({
    typeof: window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
});
  return createStore(
    rootReducer,
    initialState,
     composeEnhancers(applyMiddleware(thunk))
  );
}
