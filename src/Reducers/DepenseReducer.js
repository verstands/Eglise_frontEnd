import { GET_DEPENSE } from "../actions/DepenseAction"


const initiatState = {}

export default function depenseReducer(state = initiatState, action){
   switch(action.type){
      case GET_DEPENSE:
         return action.payload
      default:
         return state
   }
}