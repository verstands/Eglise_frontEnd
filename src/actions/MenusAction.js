import axios from "axios";
import Token from "../loadingErr/Token";
import SessionDepartement from "../loadingErr/SessionDepartement";
import Swal from "sweetalert2";


export const GET_MENUS = "GET_MENU";
export const DELETE_MENUS = "DELETE_MENU";
const url = "http://localhost:5000/api/";


export const getMenus = () => {
    return(dispatch) => {
        return axios.get(`${url}menus`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_MENUS, payload : response.data.data})
            }).catch((error) => {
                
            })
    }
}