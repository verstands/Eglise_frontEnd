import { GET_MOUVEMENTS, DELETE_MOUVEMENT } from "../actions/Mouvement.action"

const initiatState = {}

export default function mouvementReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_MOUVEMENTS:
         return action.payload
      case DELETE_MOUVEMENT:
         return state.filter((postMembre) => postMembre.id != action.payload);
      default:
         return state
   }
}