import { GET_DEPARTEMENT } from "../actions/Departemant.action";


const initiatState = {}

export default function  deparmentReduceur(state = initiatState, action){
   switch(action.type){
      case GET_DEPARTEMENT:
         return action.payload
      default:
         return state
   }
}