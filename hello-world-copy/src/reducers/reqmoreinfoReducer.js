import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function reqmoreinfoReducer(state = initialState.clients.reqmoreinfo, action) {
  switch(action.type) {
      case types.SET_SELECTED_REQUIREMENT:
      const selectedState = Object.assign([], initialState)
      selectedState.selectedRequirement = action.client;
      return selectedState
      case types.LOAD_REQ_MOREINFO_SUCCESS:
      const clientState = Object.assign([], state)
      clientState.requirement =  action.client
      clientState.candidates = action.candidates
      clientState.selectedClient = action.associatedClient
      //browserHistory.push('/clients')
      return clientState
      case types.LOAD_CANDIDATES_SUCCESS:
      const allCandidates = Object.assign([], state)
      allCandidates.candidates = action.candidates
      return allCandidates
      //update the requirement Details with recently updated requirement
      case types.LOAD_REQ_UPDATE_SUCCESS:
      const updatedReq = Object.assign([], state)
      updatedReq.requirement =  action.requirement
      return updatedReq
      
      //Update the candidate list updated candidate
      case types.UPDATE_CANDIDATE_SUCCESS:
      const updateCand = Object.assign([], state)
      
      updateCand.candidates.candidates.forEach((element, index) => {
          if(element._links.self.href === action.candidate._links.self.href) {
            updateCand.candidates.candidates[index] = action.candidate;
          }
      });
      return updateCand
      case types.LOAD_REQ_MOREINFO_FAILURE:
      const clientState1 = Object.assign([], state)
      clientState1.requirement =  {}
      clientState1.candidates= []
      //browserHistory.push('/clients')
      return clientState1
      case types.CREATE_CANDIDATE_SUCCESS:
      const newState = Object.assign([], state)
      newState.candidates.candidates.push(action.candidate)
     // browserHistory.push(`/`)
      return newState
    default:
      return state;
  }
}
