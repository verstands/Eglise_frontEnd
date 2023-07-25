import { GET_CATEGORIE_MATERIEL, DELETE_CATEGORIE_MATERIEL } from "../actions/CategorieMaterielAction";


const initiatState = {}

export default function categorieMaterielReducer(state = initiatState, action){
   switch(action.type){
      case GET_CATEGORIE_MATERIEL:
         return action.payload
         case DELETE_CATEGORIE_MATERIEL:
            return state.filter((post) => post.id != action.payload);
      default:
         return state
   }
}