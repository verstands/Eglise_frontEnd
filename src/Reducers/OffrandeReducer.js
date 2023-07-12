import { GET_OFFRANDE } from "../actions/OffrandeAction"


const initiatState = {}

export default function offrandeReducer(state = initiatState, action){
   switch(action.type){
      case GET_OFFRANDE:
         return action.payload
      default:
         return state
   }
}