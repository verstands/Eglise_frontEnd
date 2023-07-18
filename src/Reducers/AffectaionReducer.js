import { GET_MEMEBRE_AFFECTER, ADD_MEMBRE_AFFECTER } from "../actions/Affecter.action";
const initiatState = {}

export default function affecationReducer(state = initiatState, action) {
    switch (action.type) {
        case GET_MEMEBRE_AFFECTER:
            return action.payload
        case ADD_MEMBRE_AFFECTER:
            return [action.payload, ...state]
        default:
            return state
    }
}