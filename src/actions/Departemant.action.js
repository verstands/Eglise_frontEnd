import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";


export const ADD_DEPATERMENT  = "ADD_MEMBRE_AFFECTER";
export const GET_DEPARTEMENT = "GET_MEMBRE_AFFECTER"
const url = "http://localhost:5000/api/";

export const getDepartement = () => {
    return (dispatch) => {
        return axios.get(`${url}departements`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
            dispatch({ type: GET_DEPARTEMENT, payload: response.data.data })
        }).catch((error) => {
            
        })
    }
}

export const addDepartement = (data) => {
    return (dispatch) => {
        return axios.post(`${url}departement`,data,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Token()
                }
            }).then((response) => {
                dispatch({ type: ADD_DEPATERMENT, payload: data })
                Swal.fire({
                    icon: 'success',
                    text: `${response.data.message}`,
                    confirmButtonText: 'OK'
                })
            }).catch((error) => {

                if (error.response && error.response.status === 422) {
                    if (error.response.data.message.includes('The nom field is required')) {
                        Swal.fire({
                            icon: 'error',
                            text: `${error.response.data.message}`,
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: `Tous les champs sont obligatoire !`,
                        });
                    }
                } else if (error.response.status === 500) {
                    Swal.fire({
                        icon: 'error',
                        text: 'Erreur de la connexion !!!',
                        confirmButtonText: 'OK'
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: `${error.response.data.message}`,
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
}




