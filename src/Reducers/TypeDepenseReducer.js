import {
    GET_TYPE_DEPENSE,
    ADD_TYPE_DEPENSE,
    DELETE_TYPE_DEPENSE
} from "../actions/TypeDepenseAction"


const initiatState = {}

export default function TypeDepenseReducer(state = initiatState, action) {
    switch (action.type) {
        case GET_TYPE_DEPENSE:
            return action.payload
        case ADD_TYPE_DEPENSE:
            return [action.payload, ...state]
        case DELETE_TYPE_DEPENSE:
            return state.filter((postMembre) => postMembre.id != action.payload);
        default:
            return state
    }
}