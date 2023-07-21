import { GET_TYPE_MOUVEMENT } from "../actions/TypeMouvementAction";


const initiatState = {}

export default function TypeMouvementReducer(state = initiatState, action) {
    switch (action.type) {
        case GET_TYPE_MOUVEMENT:
            return action.payload
        default:
            return state
    }
}