import { GET_CULTE, DELETE_CULTE } from "../actions/CulteAction"


const initiatState = {}

export default function culteReducer(state = initiatState, action){
   switch(action.type){
      case GET_CULTE:
         return action.payload
         case DELETE_CULTE:
         return state.filter((post) => post.id != action.payload);
      default:
         return state
   }
}