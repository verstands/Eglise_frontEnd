import axios from "axios";
import Token from "../loadingErr/Token";

export const GET_MEMBRE_ENFANT = "GET_MEMBRE_ENFANT";
const url = "http://localhost:5000/api/";


export const getMembreEnfant = () => {
    return(dispatch) => {
        return axios.get(`${url}membreenfants`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_MEMBRE_ENFANT, payload : response.data.data})
            }).catch((error) => {
                alert(error)
            })
    }
}