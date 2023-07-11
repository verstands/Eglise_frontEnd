import axios from "axios";
import Token from "../loadingErr/Token";

export const GET_MOUVEMENT = "GET_MOUVEMENT";
const url = "http://localhost:5000/api/";


export const getMouvement = () => {
    return(dispatch) => {
        return axios.get(`${url}mouvements`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_MOUVEMENT, payload : response.data.data})
            }).catch((error) => {
                alert(error)
            })
    }
}