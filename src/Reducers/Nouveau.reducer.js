import { GET_NOUVEAUNE, DELETE_NOUVEAU } from "../actions/Nouveau.action"

const initiatState = {}

export default function nouveauneReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_NOUVEAUNE:
         return action.payload
      case DELETE_NOUVEAU:
         return state.filter((postMembre) => postMembre.id != action.payload);
      default:
         return state
   }
}