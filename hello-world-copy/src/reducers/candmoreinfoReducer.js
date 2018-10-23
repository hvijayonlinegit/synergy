import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function candmoreinfoReducer(state = initialState.clients.candmoreinfo, action) {
  switch(action.type) {
      case types.LOAD_CAND_MOREINFO_SUCCESS:
      const clientState = Object.assign([], state)
      clientState.candidate =  action.selectedCandidate
      return clientState
      case types.LOAD_CAND_UPDATE_SUCCESS:
      state.candidate =  action.candidate
      return state
      case types.LOAD_CAND_MOREINFO_FAILURE:
      const clientState1 = Object.assign([], state)
      clientState1.candidate =  {}
      return clientState1
    default:
      return state;
  }
}
