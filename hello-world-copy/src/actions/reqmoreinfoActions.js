import * as types from './actionTypes';
import candidatesApi from '../api/candidatesApi';
import clientsApi from'../api/clientsApi';
import * as docmoreinfoActions from '../actions/docmoreinfoActions';
import * as candmoreinfoActions from '../actions/candmoreinfoActions';
import * as clientActions from '../actions/clientActions';

import * as spinnerActions from'./spinnerActions';
export function loadCandidatesSuccess(candidates) {
  return {type: types.LOAD_CANDIDATES_SUCCESS, candidates};
}
export function updateCandidateSuccess(candidate){
  return {type: types.UPDATE_CANDIDATE_SUCCESS, candidate};
}
export function loadReqMoreInfoSuccess(associatedClient, client,candidates,selectedClient){
  return {type: types.LOAD_REQ_MOREINFO_SUCCESS,associatedClient, client,candidates,selectedClient};
}
export function loadReqUpdateSuccess(requirement){
  return {type: types.LOAD_REQ_UPDATE_SUCCESS, requirement};
}
export function loadReqMoreinfofailure(){
  
  return {type: types.LOAD_REQ_MOREINFO_FAILURE};
}
export function createCandidateSuccess(candidate){

  return {type: types.CREATE_CANDIDATE_SUCCESS, candidate}
}

export function setSelectedRequirement(client){
  return {type: types.SET_SELECTED_REQUIREMENT, client};
}

export function loadSelectedClient(associatedClientLink,selectedRequirement, candidates ){
  return function(dispatch) {
    return clientsApi.getSelectedClient(associatedClientLink).then(associatedClient => {
      dispatch(loadReqMoreInfoSuccess(associatedClient, selectedRequirement, candidates));
    }).catch(error => {
      throw(error);
    });
  };
}
//this function need 
// link - for pulling the candidates for the selected requirement.
// selected Requirement - for future additions for this req,ex for adding candidate for selected requirement
// selected ClientLink - for showing the client details in requirement page.     
export function loadReqMoreinfo(link, selectedRequirement,selectedClientLink) {
  
  //function (dispatch){dispatch(setSelectedRequirement(client));}
  return function(dispatch) {
    //1. Attach spinner for loading 
    dispatch(spinnerActions.loadSpinner(true));
    // 2. get list of candidates associated to selected requirement
    return candidatesApi.getCandidates(link).then(candidates => {
    // 3.  Default behavior to load the list of candidates in sort order and their detials.
    candidates = defaultLoad(candidates, dispatch);
    dispatch(loadSelectedClient(selectedClientLink,selectedRequirement, candidates));
    dispatch(spinnerActions.loadSpinner(false));
    }).catch(error => {
      dispatch(spinnerActions.loadSpinner(false));
      throw(error);
    });
  };

}


export function createCandidate(candidate) {
  return function (dispatch) {
    return candidatesApi.createCandidate(candidate).then(response => {
      if(!response.message){

        //const link= response._links.candidates.href;
       // dispatch(reqmoreinfoActions.loadReqMoreinfo(link, response));
        dispatch(createCandidateSuccess(response));
      }
      else{
       // dispatch(loadCatsFailure(response.message))
      }
      
      
    }).catch(error => {
      throw(error);
    });
  };
}
export function updateCandidate(candidate,id) {
  return function (dispatch) {
    return candidatesApi.updateCandidate(candidate,id).then(response => {
      if(!response.message){
         dispatch(updateCandidateSuccess(response));
        dispatch(candmoreinfoActions.loadCandUpdateSuccess(response));
      }
      else{
        //dispatch(loadCatsFailure(response.message))
      }
    }).catch(error => {
      throw(error);
    });
  };
}
export function loadCandidates() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    dispatch(spinnerActions.loadSpinner(true));
    return candidatesApi.getAllCandidates().then(candidates => {
      //console.log('inside cat action.js'+clients._embedded.accountses[0].name);
      candidates = defaultLoad(candidates, dispatch);
      dispatch(loadCandidatesSuccess(candidates));
      dispatch(spinnerActions.loadSpinner(false));
    }).catch(error => {
      throw(error);
    });
  };
}
// this function is to make the default loading of the list items 
function defaultLoad(candidates, dispatch) {
  // 1. check  for API call success 
  if (!candidates.message) {
    if (candidates._embedded.candidates.length === 0) {
      dispatch(candmoreinfoActions.loadCandMoreinfofailure());
      dispatch(docmoreinfoActions.loadDocMoreinfofailure());
    }
    else {
      //sort and load the first element as default loading
      let sortedCandidates = candidates._embedded.candidates.sort((a, b) => Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1)));
      sortedCandidates.map((n, index) => {
        const link = n._links.document.href;
        console.log('calling candiates more info using link ' + link);
        if (index === 0) {
          dispatch(candmoreinfoActions.loadCandMoreinfo(link, n));
        }
        return '';
      });
    }
    candidates = candidates._embedded;
    
  }
  // 2 API call  not success through appropriate meesage to the user
  else {
    if (candidates.status === 401) {
      dispatch(clientActions.loadSignInPage());
    }
    if (candidates.status === 500) {
      dispatch(clientActions.loadCatsFailure(candidates.message));
    }
    if (candidates.status === 403) {
      dispatch(clientActions.loadNeedAdminAccess(candidates.message));
    }
  }
  return candidates;
}