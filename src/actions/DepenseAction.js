import axios from "axios";
import Token from "../loadingErr/Token";

export const GET_DEPENSE = "GET_DEPENSE";
const url = "http://localhost:5000/api/";


export const getDepense = () => {
    return(dispatch) => {
        return axios.get(`${url}depenses`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_DEPENSE, payload : response.data.data})
            }).catch((error) => {
                
            })
    }
}