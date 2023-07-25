import { GET_PLANNING, DELETE_PLANNING } from "../actions/PlanningAction";


const initiatState = {}

export default function PlannigReducer(state = initiatState, action) {
   switch (action.type) {
      case GET_PLANNING:
         return action.payload
      case DELETE_PLANNING:
         return state.filter((postMembre) => postMembre.id != action.payload);
      default:
         return state
   }
}