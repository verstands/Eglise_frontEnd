import { GET_DEPARTEMENT_ACTIVITE } from "../actions/Departemant.action";


const initiatState = {}

export default function deparmentActiviteReduceur(state = initiatState, action) {
   switch (action.type) {
      case GET_DEPARTEMENT_ACTIVITE:
         return action.payload
      default:
         return state
   }
}