import axios from "axios";
import Token from "../loadingErr/Token";

export const GET_OFFRANDE = "GET_OFFRANDE";
const url = "http://localhost:5000/api/";


export const getOffrande = () => {
    return(dispatch) => {
        return axios.get(`${url}typeoffrandes`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_OFFRANDE, payload : response.data.data})
            }).catch((error) => {
                alert(error)
            })
    }
}