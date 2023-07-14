import { 
   GET_COMMUNICATION, 
   ADD_COMMUNICATION, 
   DELETE_COMMUNICATION
} from "../actions/CommunicationAction"



const initiatState = {}

export default function communicationReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_COMMUNICATION:
         return action.payload
      case ADD_COMMUNICATION:
         return [action.payload, ...state];
      case DELETE_COMMUNICATION:
         return state.filter((post) => post.id != action.payload);
      default:
         return state
   }
}