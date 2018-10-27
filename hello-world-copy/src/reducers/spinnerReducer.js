import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function spinnerReducer(state = initialState.spinner, action) {
  switch(action.type) {
      case types.LOAD_SPINNER_STATUS:
      return state = action.spinner
    default:
      return state;
  }
}
