import { GET_STATISTIQUE_MEMBRE } from "../actions/StatistiqueAction"


const initiatState = {}

export default function statistiqueReducer(state = initiatState, action) {
    switch (action.type) {
        case GET_STATISTIQUE_MEMBRE:
            return action.payload
        default:
            return state
    }
}