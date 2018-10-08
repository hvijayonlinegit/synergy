import * as types from './actionTypes';
import documentsApi from '../api/documentsApi';

export function loadDocMoreInfoSuccess(documents){
  return {type: types.LOAD_DOC_MOREINFO_SUCCESS, documents};
}
export function loadDocMoreinfofailure(){
  return {type: types.LOAD_DOC_MOREINFO_FAILURE};
}
export function downloadDoc(link, client) {

  return function(dispatch) {
    console.log('calling link'+ link);
    
    //return dispatch(loadCandMoreInfoSuccess(client));
    return documentsApi.download(link, client).then(documents => {
    //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
    //client.documents = documents
    const file = new Blob(
      [documents.data], 
      {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      
      window.open(fileURL);
    //var fileURL = URL.createObjectURL(documents.blob);
    //window.location.href(documents.body);
    //console.log(res);
    //console.log(documents.bytes);
    //window.location.href ='http://releases.ubuntu.com/12.04.5/ubuntu-12.04.5-alternate-amd64.iso'
    //window.location.href("blob:http://localhost:8090/d697dc28-bcfb-4491-896a-ea3f28f1374d");
    
     // dispatch(loadDocMoreInfoSuccess(client));
    }).catch(error => {
      throw(error);
    });
  };

}
