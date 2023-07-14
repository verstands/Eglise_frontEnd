import { GET_DEPARTEMENT, DELETE_DEPARTEMENT } from "../actions/Departemant.action";


const initiatState = {}

export default function deparmentReduceur(state = initiatState, action) {
   switch (action.type) {
      case GET_DEPARTEMENT:
         return action.payload
      case DELETE_DEPARTEMENT:
         return state.filter((post) => post.id != action.payload);
      default:
         return state
   }
}