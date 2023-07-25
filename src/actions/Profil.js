import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";


export const GET_PROFIL = "GET_PROFIL";
export const DELETE_PROFIL = "DELETE_PROFIL";
const url = "http://localhost:5000/api/";


export const getProfil = () => {
    return(dispatch) => {
        return axios.get(`${url}profil`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_PROFIL, payload : response.data.data})
            }).catch((error) => {
                
            })
    }
}