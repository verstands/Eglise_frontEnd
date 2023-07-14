import { GET_MEMBRE,ADD_MEMBRE, DELETE_MEMBRE,  } from "../actions/membre.action";

const initiatState = {}

export default function  membreReducer(state = initiatState, action){
   switch(action.type){
      case GET_MEMBRE:
         return action.payload;
      case ADD_MEMBRE:
         return [action.payload, ...state];
      case DELETE_MEMBRE:
         return state.filter((postMembre) => postMembre.id != action.payload);
      default:
         return state
   }
}