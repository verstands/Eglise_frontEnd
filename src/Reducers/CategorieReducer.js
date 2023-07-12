import { GET_CATEGORIE } from "../actions/CategorieAction"


const initiatState = {}

export default function categorieReducer(state = initiatState, action){
   switch(action.type){
      case GET_CATEGORIE:
         return action.payload
      default:
         return state
   }
}