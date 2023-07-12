import { GET_CAISSE } from "../actions/CaisseAction"

const initiatState = {}

export default function caisseReducer(state = initiatState, action){
   switch(action.type){
      case GET_CAISSE:
         return action.payload
      default:
         return state
   }
}