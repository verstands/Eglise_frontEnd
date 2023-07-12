import { GET_DEVISE } from "../actions/DeviseAction"


const initiatState = {}

export default function deviseReducer(state = initiatState, action){
   switch(action.type){
      case GET_DEVISE:
         return action.payload
      default:
         return state
   }
}