import * as types from './actionTypes';
import documentsApi from '../api/documentsApi';

export function loadDocMoreInfoSuccess(client){
  return {type: types.LOAD_DOC_MOREINFO_SUCCESS, client};
}
export function downloadDoc(link, client, token) {

  return function(dispatch) {
    console.log('calling link'+ link);
    
    //return dispatch(loadCandMoreInfoSuccess(client));
    return documentsApi.download(link, client,token).then(documents => {
    //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
    //client.documents = documents
    console.log(documents.bytes);
    window.location.href ='http://releases.ubuntu.com/12.04.5/ubuntu-12.04.5-alternate-amd64.iso'
      dispatch(loadDocMoreInfoSuccess(client));
    }).catch(error => {
      throw(error);
    });
  };

}
