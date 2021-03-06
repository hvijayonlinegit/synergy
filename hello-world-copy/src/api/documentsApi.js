import * as apiurl  from '../common/apiURL';

class DocumentsApi {

  static getAllDocuments(link) {
    //const PROD_URL = `https://peaceful-mesa-72076.herokuapp.com/accounts`
    //const BASE_URL = `http://localhost:8090`
    //const BASE_URL = `https://peaceful-mesa-72076.herokuapp.com`
    console.log('documentslink'+ link);
    const request = new Request(link, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'origins':'*',
        // eslint-disable-next-line
        'Authorization':' Bearer ' + localStorage.getItem('token')
      })
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getDocumentsList() {
    const request = new Request(apiurl.BASE_URL+`/synergy/api/documents`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'origins':'*',
        // eslint-disable-next-line
        'Authorization':' Bearer ' + localStorage.getItem('token')
      })
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static download(id, docname) {
    // eslint-disable-next-line
    const request = new Request(apiurl.BASE_URL+`/download`+'?id='+id+'&key='+docname, {
      method: 'GET',
      headers: new Headers({
        'responseType': 'blob',
        'Authorization':' Bearer ' + localStorage.getItem('token')
      })
    });

    return fetch(request).then(response => {

      return response;
    }).catch(error => {
      return error;
    });
  }
  static upload(file, id) {
    // eslint-disable-next-line
    const formData = new FormData();
      formData.append('file',file);
      formData.append('id',id);
    const request = new Request(apiurl.BASE_URL+`/upload`, {
      method: 'POST',
      headers: new Headers({
        'origins':'*',
        'Authorization':' Bearer ' + localStorage.getItem('token')
      }),
      body: formData
    });
    return fetch(request).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }
}

export default DocumentsApi;
