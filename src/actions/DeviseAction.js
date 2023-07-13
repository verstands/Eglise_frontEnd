import axios from "axios";
import Token from "../loadingErr/Token";

export const GET_DEVISE = "GET_DEVISE";
const url = "http://localhost:5000/api/";


export const getDevise = () => {
    return(dispatch) => {
        return axios.get(`${url}devises`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_DEVISE, payload : response.data.data})
            }).catch((error) => {
              
            })
    }
}