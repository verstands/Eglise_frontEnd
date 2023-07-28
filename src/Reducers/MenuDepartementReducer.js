import { GET_MENU_DEPARTEMENT } from "../actions/MenuDepartementAction"

const initiatState = {}

export default function menuDepartementReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_MENU_DEPARTEMENT:
         return action.payload
      default:
         return state
   }
}