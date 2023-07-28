import { GET_MENU_AFFECTER, ADD_MENU_AFFECTER, DELETE_MENU_AFFECTER } from "../actions/AffecterDep";
const initiatState = {}

export default function affecationMenuReducer(state = initiatState, action) {
    switch (action.type) {
        case GET_MENU_AFFECTER:
            return action.payload
        case ADD_MENU_AFFECTER:
            return [action.payload, ...state]
        case DELETE_MENU_AFFECTER:
            return state.filter((post) => post.id != action.payload);
        default:
            return state
    }
}