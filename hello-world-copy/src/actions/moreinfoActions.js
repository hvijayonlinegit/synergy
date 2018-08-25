import * as types from './actionTypes';
import requirementsApi from '../api/RequirementsApi';

export function loadMoreInfoSuccess(client){
  return {type: types.LOAD_MOREINFO_SUCCESS, client};
}
export function loadMoreinfo(link, client) {

  return function(dispatch) {
    console.log('calling link'+ link);
    return requirementsApi.getRequirements(link).then(requirements => {
    //  console.log('inside requirement action.js'+requirements._embedded.requirementses[0].title);
    client.requirements = requirements._embedded
      dispatch(loadMoreInfoSuccess(client));
    }).catch(error => {
      throw(error);
    });
  };

}
