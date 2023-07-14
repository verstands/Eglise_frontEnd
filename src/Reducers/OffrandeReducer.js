import { GET_OFFRANDE, DELETE_OFFRANDE } from "../actions/OffrandeAction"


const initiatState = {}

export default function offrandeReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_OFFRANDE:
         return action.payload
      case DELETE_OFFRANDE:
         return state.filter((postMembre) => postMembre.id != action.payload);
      default:
         return state
   }
}