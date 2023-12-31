import { combineReducers } from "redux";
import membreReducer from "./Membre.reducer";
import enfantReducer from "./Enfant.reducer";
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
import mouvementReducer from "./Mouvement.reducer";
import affecationReducer from "./AffectaionReducer";
import TypeMouvementReducer from "./TypeMouvementReducer";
import PlannigReducer from "./PlanningReducer";
import categorieMaterielReducer from "./CategorieMaterielReducer";
import ProfilReducer from "./ProfilReducer";
import menuReducer from "./MenuReducer";
import statistiqueReducer from "./StatistiqueReducer";
import affecationMenuReducer from "./AffDepReducer";
import menuDepartementReducer from "./MenuDepartementReducer";

export default combineReducers({
    membreReducer,
    enfantReducer,
    mouvementReducer,
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
    affecationReducer,
    TypeMouvementReducer,
    PlannigReducer,
    categorieMaterielReducer,
    ProfilReducer,
    menuReducer,
    statistiqueReducer,
    affecationMenuReducer,
    menuDepartementReducer
    
});