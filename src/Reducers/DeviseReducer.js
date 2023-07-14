import { GET_DEVISE, DELETE_DEVISE } from "../actions/DeviseAction"


const initiatState = {}

export default function deviseReducer(state = initiatState, action){
   switch(action.type){
      case GET_DEVISE:
         return action.payload
         case DELETE_DEVISE:
            return state.filter((post) => post.id != action.payload);
      default:
         return state
   }
}