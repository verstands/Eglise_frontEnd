import { GET_DEPENSE, DELETE_DEPENSE } from "../actions/DepenseAction"


const initiatState = {}

export default function depenseReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_DEPENSE:
         return action.payload
      case DELETE_DEPENSE:
         return state.filter((post) => post.id != action.payload);
      default:
         return state
   }
}