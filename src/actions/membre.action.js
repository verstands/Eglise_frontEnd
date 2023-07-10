import axios from "axios";
import Token from "../loadingErr/Token";

export const GET_MEMBRE = "GET_MEMBRE";
export const ADD_MEMBRE  = "ADD_MEMBRE";
const url = "http://localhost:5001/api/";


export const getMembre = () => {
    return(dispatch) => {
        return axios.get(`${url}membres`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_MEMBRE, payload : response.data.data})
            }).catch((error) => {
                alert(error)
            })
    }
}

export const addMembre = (data) => {
    return(dispatch) => {
        return axios.post(`${url}membre`,{data},{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            },
        }).then((response) => {
                dispatch({type : ADD_MEMBRE, payload : data})
            }).catch((error) => {
                alert(error)
            })
    }
}

