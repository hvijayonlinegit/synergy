import {combineReducers} from 'redux';
import clients from './catReducer';
import requirements from './hobbyReducer';

const rootReducer = combineReducers({
  // short hand property names
  clients,
  requirements
})

export default rootReducer;
