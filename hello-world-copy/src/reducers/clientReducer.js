import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function catReducer(state = initialState.clients.accountses, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
    return Object.assign({}, state, action.clients)
    case types.REQUIRE_ADMIN_ACCESS:
    browserHistory.push(`/adminaccess`)
    return state
    case types.LOAD_CATS_FAILURE:
    browserHistory.push(`/500`)
    return state
    case types.UNAUTH_SIGNIN_PAGE:
    browserHistory.push('/signin')
    return state
    case types.CREATE_CAT_SUCCESS:
      const newState = Object.assign([], state)
      newState.accountses.push(action.cat)
      //browserHistory.push(`/`)
      return newState

    case types.UPDATE_CLIENT_SUCCESS:
    const newState2 = Object.assign([], state)
    
    newState2.accountses.forEach((element, index) => {
        if(element._links.self.href === action.client._links.self.href) {
          newState2.accountses[index] = action.client;
        }
    });
    return newState2
    case types.DELETE_CAT_SUCCESS: {
      const delNewState = Object.assign([], state)
      const indexOfCatToDelete = delNewState.accountses.findIndex(
        account => {
          console.log(account.name);
          return account.name === action.cat.name
        })
       delNewState.accountses.splice(indexOfCatToDelete, 1)
      browserHistory.push('/clients')
      return delNewState
    }
    default:
      return state;
  }
}

// return action.cats;
// return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))


// case types.LOAD_REQUIREMENTS_SUCCESS:
//   // return action.cats;
//  // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
//  const nextState = { ...state};
//  nextState.requirements = action.requirements.requirementses;
//  const newState = Object.assign({}, nextState);
//  browserHistory.push('/requirements')
//  return newState
 // case types.LOAD_CANDIDATES_SUCCESS:
 //   // return action.cats;
 //  // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
 //  browserHistory.push(`/requirements`)
 //  return Object.assign({}, state, action.candidates)
