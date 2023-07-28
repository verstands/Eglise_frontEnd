import { GET_MENUS } from "../actions/MenusAction"

const initiatState = {}

export default function menusReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_MENUS:
         return action.payload
      default:
         return state
   }
}