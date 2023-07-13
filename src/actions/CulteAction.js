import axios from "axios";
import Token from "../loadingErr/Token";

export const GET_CULTE = "GET_CULTE";
const url = "http://localhost:5000/api/";


export const getCulte = () => {
    return(dispatch) => {
        return axios.get(`${url}cultes`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_CULTE, payload : response.data.data})
            }).catch((error) => {
               
            })
    }
}