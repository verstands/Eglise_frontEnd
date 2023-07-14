import { GET_CAISSE, DELETE_CAISSE } from "../actions/CaisseAction"

const initiatState = {}

export default function caisseReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_CAISSE:
         return action.payload
      case DELETE_CAISSE:
         return state.filter((post) => post.id != action.payload);
      default:
         return state
   }
}