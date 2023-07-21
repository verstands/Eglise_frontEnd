import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";

export const GET_TYPE_MOUVEMENT = "GET_TYPE_MOUVEMENT";
export const ADD_TYPE_MOUVEMENT = "ADD_TYPE_MOUVEMENT";
export const DELETE_TYPE_MOUVEMENT = "DELETE_TYPE_MOUVEMENT";
const url = "http://localhost:5000/api/";


export const getTypeMouvement = () => {
    return (dispatch) => {
        return axios.get(`${url}typemouvements`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
            dispatch({ type: GET_TYPE_MOUVEMENT, payload: response.data.data })
        }).catch((error) => {

        })
    }
}