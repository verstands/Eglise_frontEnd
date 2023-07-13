import { GET_MATERIEL } from "../actions/MaterielAction";
import { ADD_MATERIEL } from "../actions/MaterielAction";

const initiatState = {}

export default function  materielReducer(state = initiatState, action){
   switch(action.type){
      case GET_MATERIEL:
         return action.payload
      case ADD_MATERIEL:
         return [action.payload, ...state]
      default:
         return state
   }
}