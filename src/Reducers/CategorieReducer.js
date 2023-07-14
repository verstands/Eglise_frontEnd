import { GET_CATEGORIE, DELETE_CATEGORIE } from "../actions/CategorieAction"


const initiatState = {}

export default function categorieReducer(state = initiatState, action){
   switch(action.type){
      case GET_CATEGORIE:
         return action.payload
         case DELETE_CATEGORIE:
            return state.filter((post) => post.id != action.payload);
      default:
         return state
   }
}