import axios from "axios";
import Token from "../loadingErr/Token";
import SessionDepartement from "../loadingErr/SessionDepartement";
import Swal from "sweetalert2";     


export const GET_MENU = "GET_MENU";
export const DELETE_MENU = "DELETE_MENU";
const url = "http://localhost:5000/api/";
const dep = localStorage.getItem("dep");


export const getMenu = () => {
    return(dispatch) => {
        return axios.get(`${url}AffectationMenu/${dep}`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_MENU, payload : response.data.data})
            }).catch((error) => {
                alert(error)
            })
    }
}