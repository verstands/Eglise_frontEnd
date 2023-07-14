import { 
   GET_DEPARTEMENT, 
   DELETE_DEPARTEMENT, 
   GET_DEPARTEMENT_ACTIVITE 
} from "../actions/Departemant.action";


const initiatState = {}

export default function deparmentReduceur(state = initiatState, action) {
   switch (action.type) {
      case GET_DEPARTEMENT:
         return action.payload
      case DELETE_DEPARTEMENT:
         return state.filter((post) => post.id != action.payload);
      case GET_DEPARTEMENT_ACTIVITE :
         return action.payload
      default:
         return state
   }
}