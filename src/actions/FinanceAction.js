import axios from "axios";
import Token from "../loadingErr/Token";

export const GET_FINANCE = "GET_FINANCE";
const url = "http://localhost:5000/api/";


export const getFinance = () => {
    return(dispatch) => {
        return axios.get(`${url}finances`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_FINANCE, payload : response.data.data})
            }).catch((error) => {
                alert(error)
            })
    }
}