import {
   GET_MEMBRE,
   ADD_MEMBRE,
   DELETE_MEMBRE,
   GET_MEMBRE_ID
} from "../actions/membre.action";

const initiatState = {}

export default function membreReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_MEMBRE:
         return action.payload;
      case ADD_MEMBRE:
         return action.payload;
      case GET_MEMBRE_ID:
         return { ...state, [action.payload.id]: action.payload };
      case DELETE_MEMBRE:
         return state.filter((postMembre) => postMembre.id != action.payload);
      default:
         return state
   }
}