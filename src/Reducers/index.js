import { combineReducers } from "redux";
import membreReducer from "./Membre.reducer";
import enfantReducer from "./Enfant.reducer";
import mouvement from "./Mouvement.reducer";
import deparmentReduceur from "./Departement.reducer";
import nouveauneReducer from "./Nouveau.reducer";
import culteReducer from "./CulteReducer";
import categorieReducer from "./CategorieReducer";
import depenseReducer from "./DepenseReducer";
import financeReducer from "./FinanceReducer";
import offrandeReducer from "./OffrandeReducer";
import deviseReducer from "./DeviseReducer";
import caisseReducer from "./CaisseReducer";
import TypeDepenseReducer from "./TypeDepenseReducer";
import communicationReducer from "./CommunicationReducer";
import materielReducer from "./MaterielReducer";

export default combineReducers({
    membreReducer,
    enfantReducer,
    mouvement,
    deparmentReduceur,
    nouveauneReducer,
    culteReducer,
    categorieReducer,
    depenseReducer,
    financeReducer,
    offrandeReducer,
    deviseReducer,
    caisseReducer,
    TypeDepenseReducer,
    communicationReducer,
    materielReducer,
});