import axios from "axios";
import Token from "../loadingErr/Token";

export const GET_CATEGORIE = "GET_CATEGORIE";
const url = "http://localhost:5000/api/";


export const getCategorie = () => {
    return(dispatch) => {
        return axios.get(`${url}categories`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_CATEGORIE, payload : response.data.data})
            }).catch((error) => {
                alert(error)
            })
    }
}