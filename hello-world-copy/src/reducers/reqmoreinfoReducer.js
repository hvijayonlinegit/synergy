import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';
export default function reqmoreinfoReducer(state = initialState.clients.reqmoreinfo, action) {
  switch(action.type) {
      case types.SET_SELECTED_REQUIREMENT:
      const selectedState = Object.assign([], initialState)
      selectedState.selectedRequirement = action.client;
      return selectedState
      case types.LOAD_REQ_MOREINFO_SUCCESS:
      const clientState = Object.assign([], state)
      clientState.requirement =  action.client
      //browserHistory.push('/clients')
      return clientState
      case types.LOAD_REQ_MOREINFO_FAILURE:
      const clientState1 = Object.assign([], state)
      clientState1.requirement =  {
        candidates: [],
      }
      //browserHistory.push('/clients')
      return clientState1
      case types.CREATE_CANDIDATE_SUCCESS:
      const newState = Object.assign([], state)
      newState.requirement.candidates.candidates.push(action.candidate)
     // browserHistory.push(`/`)
      return newState
    default:
      return state;
  }
}
