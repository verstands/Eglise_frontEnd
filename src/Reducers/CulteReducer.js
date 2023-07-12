import { GET_CULTE } from "../actions/CulteAction"


const initiatState = {}

export default function culteReducer(state = initiatState, action){
   switch(action.type){
      case GET_CULTE:
         return action.payload
      default:
         return state
   }
}