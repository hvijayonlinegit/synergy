import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function candmoreinfoReducer(state = initialState.candmoreinfo, action) {
  switch(action.type) {
      case types.LOAD_CAND_MOREINFO_SUCCESS:
      const clientState = Object.assign([], state)
      clientState.candidate =  action.client
      browserHistory.push('/clients')
      return clientState
    default:
      return state;
  }
}
