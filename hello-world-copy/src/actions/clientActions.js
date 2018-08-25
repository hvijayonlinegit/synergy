import * as types from './actionTypes';
import catApi from '../api/clientsApi';

export function loadCatsSuccess(clients) {
  return {type: types.LOAD_CATS_SUCCESS, clients};
}

export function updateCatSuccess(cat) {
  return {type: types.UPDATE_CAT_SUCCESS, cat}
}

export function createCatSuccess(cat) {
  return {type: types.CREATE_CAT_SUCCESS, cat}
}

export function deleteCatSuccess(cat) {
  return {type: types.DELETE_CAT_SUCCESS, cat}
}
// export function loadRequirementsSuccess(requirements) {
//   return {type: types.LOAD_REQUIREMENTS_SUCCESS, requirements};
// }
export function loadCandidatesSuccess(candidates) {
  return {type: types.LOAD_CANDIDATES_SUCCESS, candidates};
}

export function loadClients() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return catApi.getAllClients().then(clients => {
    //  console.log('inside cat action.js'+clients._embedded.accountses[0].name);
      dispatch(loadCatsSuccess(clients._embedded));
    }).catch(error => {
      throw(error);
    });
  };
}
// export function loadRequirements(link) {
//   // make async call to api, handle promise, dispatch action when promise is resolved
//   return function(dispatch) {
//     console.log('calling link'+ link);
//     return catApi.getRequirements(link).then(requirements => {
//     //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
//       dispatch(loadRequirementsSuccess(requirements._embedded));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }
export function loadCandidates(link) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    console.log('calling link'+ link);
    return catApi.getCandidates(link).then(candidates => {
      console.log('inside requirement action.js'+candidates._embedded.candidates[0].firstname);
      dispatch(loadCandidatesSuccess(candidates._embedded));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateCat(cat) {
  return function (dispatch) {
    return catApi.updateCat(cat).then(responseCat => {
      dispatch(updateCatSuccess(responseCat));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createCat(client) {
  return function (dispatch) {
    return catApi.createCat(client).then(responseCat => {
      dispatch(createCatSuccess(responseCat));
      return responseCat;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteCat(cat , link) {
  return function(dispatch) {
    return catApi.deleteCat(cat, link).then(() => {
      console.log(`Deleted ${cat.name}`)
      dispatch(deleteCatSuccess(cat));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
