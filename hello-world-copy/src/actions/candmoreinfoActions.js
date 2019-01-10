import * as types from './actionTypes';
import documentsApi from '../api/documentsApi';
import * as docmoreinfoActions from '../actions/docmoreinfoActions';

import * as clientActions from '../actions/clientActions';

import * as spinnerActions from'./spinnerActions';
export function loadCandUpdateSuccess(candidate){
  return {type: types.LOAD_CAND_UPDATE_SUCCESS, candidate};
}
export function loadCandMoreInfoSuccess(selectedCandidate){
  return {type: types.LOAD_CAND_MOREINFO_SUCCESS, selectedCandidate};
}
export function loadCandMoreinfofailure(){
  return {type: types.LOAD_CAND_MOREINFO_FAILURE};
}
export function loadDocUploadSuccess(documents){
  return {type: types.LOAD_DOC_UPLOAD_SUCCESS, documents};
}
export function loadCandMoreinfo(doclink, selectedCandidate) {
  return function(dispatch) {
    //1.  Attach spinner for loading 
     dispatch(spinnerActions.loadSpinner(true));
    // 2. get list of documents  associated to selected candidate
    return documentsApi.getAllDocuments(doclink).then(documents => {
    // 3.  Default behavior to load the list of documents  in sort order and their detials.
      if(!documents.message){
        if(documents._embedded.documents.length === 0){
         dispatch(docmoreinfoActions.loadDocMoreinfofailure());
         dispatch(spinnerActions.loadSpinner(false));
        }else{
          dispatch(docmoreinfoActions.loadDocMoreInfoSuccess(documents._embedded.documents));
          
        }
        selectedCandidate.documents =documents._embedded.documents
        dispatch(loadCandMoreInfoSuccess(selectedCandidate));
        dispatch(spinnerActions.loadSpinner(false));
      }
      else{
        if(documents.status === 401){
          dispatch(clientActions.loadSignInPage())
        }
        if(documents.status === 500)
        {
          dispatch(clientActions.loadCatsFailure(documents.message))
        }
        if(documents.status === 403)
        {
          dispatch(clientActions.loadNeedAdminAccess(documents.message))
        }
        dispatch(spinnerActions.loadSpinner(false));
      }
    }).catch(error => {
      throw(error);
    });
  };

}
export function fileUpload(file, id) {
  return function (dispatch) {
    dispatch(spinnerActions.loadSpinner(true));
    return documentsApi.upload(file, id).then(response => {
      if(!response.message){
        //console.log(response.json)
        //const link= response._links.candidates.href;
        if (response.ok) {
          response.json().then(json => {
            console.log(json);
            dispatch(loadDocUploadSuccess(json));
            dispatch(spinnerActions.loadSpinner(false));
          });
        }
       
        //dispatch(createCandidateSuccess(response));
      }
      else{
       // dispatch(loadCatsFailure(response.message))
       dispatch(spinnerActions.loadSpinner(false));
      }
      
    }).catch(error => {
      throw(error);
    });
  };
}
export function loadDocuments() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return documentsApi.getDocumentsList().then(documents => {
      //console.log('inside cat action.js'+clients._embedded.accountses[0].name);
      dispatch(docmoreinfoActions.loadDocumentsSuccess(documents._embedded.documents));
    }).catch(error => {
      throw(error);
    });
  };
}