import axios from "axios";
import Token from "../loadingErr/Token";



export const GET_MENU_DEPARTEMENT = "GET_MENU_DEPARTEMENT";
export const DELETE_MENUS = "DELETE_MENU";
const url = "http://localhost:5000/api/";


export const getMenuDepartement = () => {
    return(dispatch) => {
        return axios.get(`${url}menus`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_MENU_DEPARTEMENT, payload : response.data.data})
            }).catch((error) => {
                alert(error)
            })
    }
}