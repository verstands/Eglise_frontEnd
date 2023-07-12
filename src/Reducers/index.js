import { combineReducers } from "redux";
import membreReducer from "./Membre.reducer";
import enfantReducer from "./Enfant.reducer";
import mouvement from "./Mouvement.reducer";
import deparmentReduceur from "./Departement.reducer";
import nouveauneReducer from "./Nouveau.reducer";

export default combineReducers({
    membreReducer,
    enfantReducer,
    mouvement,
    deparmentReduceur,
    nouveauneReducer,
});