import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function docmoreinfoReducer(state = initialState.clients.docmoreinfo, action) {
  switch(action.type) {
      case types.LOAD_DOC_MOREINFO_SUCCESS:
      const clientState1 = Object.assign([], state)
      clientState1.documents = action.documents
      return  clientState1
       case types.LOAD_DOC_MOREINFO_FAILURE:
       const clientState2 = Object.assign([], state)
       clientState2.documents = []
       return  clientState2
     case types.LOAD_DOC_UPLOAD_SUCCESS:
     const clientState3 = Object.assign([], state)
     clientState3.documents.push( action.documents[0])
     return  clientState3
    default:
      return state;
  }
}
