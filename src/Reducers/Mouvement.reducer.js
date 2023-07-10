import { GET_MOUVEMENT } from "../actions/Mouvement.action"

const initiatState = {}

export default function  mouvement(state = initiatState, action){
   switch(action.type){
      case GET_MOUVEMENT:
         return action.payload
      default:
         return state
   }
}