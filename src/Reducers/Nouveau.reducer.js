import { GET_NOUVEAUNE } from "../actions/Nouveau.action"

const initiatState = {}

export default function  nouveauneReducer(state = initiatState, action){
   switch(action.type){
      case GET_NOUVEAUNE:
         return action.payload
      default:
         return state
   }
}