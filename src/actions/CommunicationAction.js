import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";

export const GET_COMMUNICATION = "GET_COMMUNICATION";
export const ADD_COMMUNICATION = "GET_COMMUNICATION";
export const DELETE_COMMUNICATION = "DELETE_COMMUNICATION";
const url = "http://localhost:5000/api/";


export const getCommunication = () => {
    return(dispatch) => {
        return axios.get(`${url}communications`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_COMMUNICATION, payload : response.data.data})
            }).catch((error) => {
               
            })
    }
}

export const addCommunication = (data) => {
    return (dispatch) => {
        return axios.post(`${url}communication`,data,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Token()
                }
            }).then((response) => {
                dispatch({ type: ADD_COMMUNICATION, payload: data })
                Swal.fire({
                    icon: 'success',
                    text: `${response.data.message}`,
                    confirmButtonText: 'OK'
                })
            }).catch((error) => {

                if (error.response && error.response.status === 422) {
                    
                        Swal.fire({
                            icon: 'error',
                            text: `${error.response.data.message}`,
                        });
                    
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

export const deleteCommunication = (id) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Êtes-vous sûr de vouloir supprimer ce Categorie ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimer',
            cancelButtonText: 'Non, annuler'
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`${url}communication/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_COMMUNICATION, payload: id });
                        Swal.fire({
                            icon: 'success',
                            text: `${response.data.message}`,
                            confirmButtonText: 'OK'
                        });
                    })
                    .catch((error) => {
                        alert(error);
                    });
            }
        });
    };
};