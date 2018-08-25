import * as types from './actionTypes';
import candidatesApi from '../api/candidatesApi';

export function loadReqMoreInfoSuccess(client){
  return {type: types.LOAD_REQ_MOREINFO_SUCCESS, client};
}
export function loadReqMoreinfo(link, client) {

  return function(dispatch) {
    console.log('calling link'+ link);
    return candidatesApi.getCandidates(link).then(candidates => {
    //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
    client.candidates = candidates._embedded
      dispatch(loadReqMoreInfoSuccess(client));
    }).catch(error => {
      throw(error);
    });
  };

}
