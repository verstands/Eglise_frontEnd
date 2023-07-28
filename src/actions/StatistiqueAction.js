import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";


export const GET_STATISTIQUE_MEMBRE = "GET_STATISTIQUE_MEMBRE";
const url = "http://localhost:5000/api/";


export const getStatistiqueMembre = () => {
    return(dispatch) => {
        return axios.get(`${url}membrestatistique`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_STATISTIQUE_MEMBRE, payload : response.data})
            }).catch((error) => {
                alert(error)
            })
    }
}