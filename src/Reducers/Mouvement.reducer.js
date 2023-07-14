import { GET_MOUVEMENT } from "../actions/Mouvement.action"

const initiatState = {}

export default function  mouvementReducer(state = initiatState, action){
   switch(action.type){
      case GET_MOUVEMENT:
         return action.payload
      default:
         return state
   }
}