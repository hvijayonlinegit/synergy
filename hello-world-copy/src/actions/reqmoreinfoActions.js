import * as types from './actionTypes';
import candidatesApi from '../api/candidatesApi';

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
export function loadReqMoreInfoSuccess(client,candidates){
  return {type: types.LOAD_REQ_MOREINFO_SUCCESS, client,candidates};
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
export function loadReqMoreinfo(link, client) {
  //function (dispatch){dispatch(setSelectedRequirement(client));}
  return function(dispatch) {
    console.log('getting candidates using  link'+ link);
    return candidatesApi.getCandidates(link).then(candidates => {
    //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
    candidates = defaultLoad(candidates, dispatch);
    dispatch(loadReqMoreInfoSuccess(client, candidates));
    }).catch(error => {
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