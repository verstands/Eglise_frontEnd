import {
   GET_DEPARTEMENTS,
   DELETE_DEPARTEMENT,
   ADD_DEPATERMENT
} from "../actions/Departemant.action";


const initiatState = {}

export default function deparmentReduceur(state = initiatState, action) {
   switch (action.type) {
      case GET_DEPARTEMENTS:
         return action.payload
      case DELETE_DEPARTEMENT:
         return state.filter((post) => post.id != action.payload);
      case ADD_DEPATERMENT:
         return [action.payload, ...state];
      default:
         return state
   }
}