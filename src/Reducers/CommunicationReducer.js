import { GET_COMMUNICATION } from "../actions/CommunicationAction"
import { ADD_COMMUNICATION } from "../actions/CommunicationAction"


const initiatState = {}

export default function communicationReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_COMMUNICATION:
         return action.payload
      case ADD_COMMUNICATION:
         return [action.payload, ...state]
      default:
         return state
   }
}