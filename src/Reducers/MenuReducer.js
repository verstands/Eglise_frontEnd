import { GET_MENU } from "../actions/MenuAction";

const initiatState = {}

export default function menuReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_MENU:
         return action.payload
      default:
         return state
   }
}