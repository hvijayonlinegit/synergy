import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function moreinfoReducer(state = initialState.clients.moreinfo, action) {
  switch(action.type) {
      case types.CREATE_REQUIREMENT_SUCCESS:
      const newState = Object.assign([], state)
      newState.requirements.requirementses.push(action.requirement)
     // browserHistory.push(`/`)
      return newState
      case types.UPDATE_REQUIREMENT_SUCCESS:
        const updateReq = Object.assign([], state)
        
        updateReq.requirements.requirementses.forEach((element, index) => {
            if(element._links.self.href === action.requirement._links.self.href) {
              updateReq.requirements.requirementses[index] = action.requirement;
            }
        });
        return updateReq
      case types.LOAD_MOREINFO_UPDATE_SUCCESS:
      const clientStatecleint =Object.assign([], state)
      clientStatecleint.client =  action.client
      return clientStatecleint
       
      case types.LOAD_MOREINFO_SUCCESS:
      const clientState = Object.assign([], state)
      clientState.edit = action.edit
      const clientStatex =Object.assign([], clientState)
      clientStatex.client =  action.client
      const clientStatey =Object.assign([], clientStatex)
      clientStatey.requirements =  action.requirements
     // browserHistory.push('/clients')
      return clientStatey

      case types.LOAD_REQUIREMENTS_SUCCESS:
      const allrequirements = Object.assign([], state)
      
      
      
      allrequirements.requirements =  action.requirements
     // browserHistory.push('/clients')
      return allrequirements
      case types.LOAD_MOREINFO_EDIT:
      const state2 = Object.assign([], state)
      state2.edit = action.edit
      return state2
    default:
      return state;
  }
}
