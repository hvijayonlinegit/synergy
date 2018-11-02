import * as types from './actionTypes';
import documentsApi from '../api/documentsApi';

export function loadDocumentsSuccess(documents){
  return {type: types.LOAD_DOCUMENTS_SUCCESS, documents}
}
export function loadDocMoreInfoSuccess(documents){
  return {type: types.LOAD_DOC_MOREINFO_SUCCESS, documents};
}
export function loadDocMoreinfofailure(){
  return {type: types.LOAD_DOC_MOREINFO_FAILURE};
}
export function loadDocUploadSuccess(documents){
  return {type: types.LOAD_DOC_UPLOAD_SUCCESS, documents};
}
export function loadDocDownloadLink(link){
  return {type: types.LOAD_DOC_DOWNLOAD_LINK, link};
}
export function downloadDoc(id, docname) {

  return function(dispatch) {
    console.log('calling link'+ id);
    
    //return dispatch(loadCandMoreInfoSuccess(client));
    return documentsApi.download(id, docname).then(documents => {
    //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
    //client.documents = documents
    const file = new Blob(
      [documents.data], 
      { type: "application/octet-stream"});
      const fileURL = window.URL.createObjectURL(file);
     console.log(fileURL);
      //window.open(fileURL);
    //var fileURL = URL.createObjectURL(documents.blob);
    //window.location.href(documents.body);
    //console.log(res);
    //console.log(documents.bytes);
    window.open(fileURL)
    //window.location.href = 'blob:http://localhost:5000/1fd0516a-5298-406c-be77-9efc07dc5ced';
    //window.location.href("blob:http://localhost:8090/d697dc28-bcfb-4491-896a-ea3f28f1374d");
    
     dispatch(loadDocDownloadLink(fileURL));
    }).catch(error => {
      throw(error);
    });
  };

}
