import { GET_MEMBRE } from "../actions/membre.action";
import { ADD_MEMBRE } from "../actions/membre.action";

const initiatState = {}

export default function  membreReducer(state = initiatState, action){
   switch(action.type){
      case GET_MEMBRE:
         return action.payload
      case ADD_MEMBRE:
         return [action.payload, ...state]
      default:
         return state
   }
}