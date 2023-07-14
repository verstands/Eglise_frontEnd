import { 
    GET_MATERIEL,
    ADD_MATERIEL,
    DELETE_MATERIEL
} from "../actions/MaterielAction";

const initiatState = {}

export default function materielReducer(state = initiatState, action) {
    switch (action.type) {
        case GET_MATERIEL:
            return action.payload
        case ADD_MATERIEL:
            return [action.payload, ...state]
        case DELETE_MATERIEL:
            return state.filter((post) => post.id != action.payload);
        default:
            return state
    }
}