import { GET_FINANCE, DELETE_FINANCE } from "../actions/FinanceAction"


const initiatState = {}

export default function financeReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_FINANCE:
         return action.payload
      case DELETE_FINANCE:
         return state.filter((post) => post.id != action.payload);
      default:
         return state
   }
}