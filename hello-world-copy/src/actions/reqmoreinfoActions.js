import * as types from './actionTypes';
import candidatesApi from '../api/candidatesApi';

import * as docmoreinfoActions from '../actions/docmoreinfoActions';
import * as candmoreinfoActions from '../actions/candmoreinfoActions';
import * as clientActions from '../actions/clientActions';
export function loadReqMoreInfoSuccess(client){
  return {type: types.LOAD_REQ_MOREINFO_SUCCESS, client};
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
    if(!candidates.message){
      if(candidates._embedded.candidates.length === 0){
        dispatch(candmoreinfoActions.loadCandMoreinfofailure());
        dispatch(docmoreinfoActions.loadDocMoreinfofailure());
      }else{
        // Code changes for default loading
        let sortedCandidates =  candidates._embedded.candidates.sort(
          (a,b)=> Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1))
        );
        sortedCandidates.map((n, index) =>{
          const link= n._links.document.href
          console.log('calling candiates more info using link '+link);
          if(index ===0){
            dispatch(candmoreinfoActions.loadCandMoreinfo(link, n));
          }
          return '';
        });
      }
        
      client.candidates = candidates._embedded
      dispatch(loadReqMoreInfoSuccess(client));
    }
    else{
      if(candidates.status === 401){
        dispatch(clientActions.loadSignInPage())
      }
      if(candidates.status === 500)
      {
        dispatch(clientActions.loadCatsFailure(candidates.message))
      }
      if(candidates.status === 403)
      {
        dispatch(clientActions.loadNeedAdminAccess(candidates.message))
      }
    }
    
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