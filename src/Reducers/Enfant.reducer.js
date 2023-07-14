import { GET_MEMBRE_ENFANT, DELETE_MEMBRE_ENFANT } from "../actions/Enfant.action";


const initiatState = {}

export default function enfantReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_MEMBRE_ENFANT:
         return action.payload
      case DELETE_MEMBRE_ENFANT:
         return state.filter((post) => post.id != action.payload);
      default:
         return state
   }
}