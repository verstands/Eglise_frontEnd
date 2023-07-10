import { combineReducers } from "redux";
import membreReducer from "./Membre.reducer";
import enfantReducer from "./Enfant.reducer";
import mouvement from "./Mouvement.reducer";

export default combineReducers({
    membreReducer,
    enfantReducer,
    mouvement,
});