import { GET_FINANCE } from "../actions/FinanceAction"


const initiatState = {}

export default function financeReducer(state = initiatState, action){
   switch(action.type){
      case GET_FINANCE:
         return action.payload
      default:
         return state
   }
}