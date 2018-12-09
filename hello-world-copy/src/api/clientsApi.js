
import * as apiurl  from '../common/apiURL';


class clientsApi {
  
  static getAllClients() {
    //const PROD_URL = `https://peaceful-mesa-72076.herokuapp.com/accounts`
    //const BASE_URL = `http://192.168.0.17:8090/accounts`
   // const BASE_URL = `http://localhost:8090/synergy/api`
   //const BASE_URL = 'https://peaceful-mesa-72076.herokuapp.com/synergy/api'
    const request = new Request(apiurl.BASE_URL+`/synergy/api/accountses`, {
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

  static updateClient(client,id) {
    const request = new Request(apiurl.BASE_URL+`/synergy/api/accountses/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':' Bearer ' + localStorage.getItem('token')
      }),
      body: JSON.stringify(client)
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createCat(client) {
    
    const request = new Request(apiurl.BASE_URL+`/synergy/api/accountses`, {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':' Bearer ' + localStorage.getItem('token')
      }),
      body: JSON.stringify(client)
    });
    console.log(request.body)
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  // static getRequirements(link) {
  //   console.log('inside the get requirement'+link)
  //   const request = new Request(link, {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Accept': 'application/json'
  //     })
  //   });
  //
  //   return fetch(request).then(response => {
  //     return response.json();
  //   }).catch(error => {
  //     return error;
  //   });
  // }
  static getCandidates(link) {
    console.log('inside the get requirement'+link)
    const request = new Request(link, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Authorization':' Bearer ' + localStorage.getItem('token')
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getSelectedClient(link) {
    const request = new Request(link, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Authorization':' Bearer ' + localStorage.getItem('token')
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteCat(cat, link) {
    const request = new Request(link, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default clientsApi;
