import { GET_PROFIL } from "../actions/Profil";


const initiatState = {}

export default function ProfilReducer(state = initiatState, action) {
    switch (action.type) {
        case GET_PROFIL:
            return action.payload
        default:
            return state
    }
}