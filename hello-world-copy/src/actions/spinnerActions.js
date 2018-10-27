import * as types from './actionTypes';


export function loadSpinner(spinner) {
    return {type: types.LOAD_SPINNER_STATUS, spinner};
  }