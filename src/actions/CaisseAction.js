import axios from "axios";
import Token from "../loadingErr/Token";

export const GET_CAISSE = "GET_CAISSE";
const url = "http://localhost:5000/api/";


export const getCaisse = () => {
    return(dispatch) => {
        return axios.get(`${url}caisses`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_CAISSE, payload : response.data.data})
            }).catch((error) => {
                alert(error + 'caise')
            })
    }
}