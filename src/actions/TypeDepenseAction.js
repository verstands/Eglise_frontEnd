import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";

export const GET_TYPE_DEPENSE = "GET_TYPE_DEPENSE";
export const ADD_TYPE_DEPENSE = "ADD_TYPE_DEPENSE";
export const DELETE_TYPE_DEPENSE = "DELETE_TYPE_DEPENSE";
const url = "http://localhost:5000/api/";


export const getTypeDepense = () => {
    return (dispatch) => {
        return axios.get(`${url}type_depenses`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
            dispatch({ type: GET_TYPE_DEPENSE, payload: response.data.data })
        }).catch((error) => {

        })
    }
}

export const addTypeDepense = (postData) => {
    return (dispatch) => {
        return axios.post(`${url}type_depense`, postData,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Token()
                }
            }).then((response) => {
                dispatch({ type: ADD_TYPE_DEPENSE, payload: postData })
                Swal.fire({
                    icon: 'success',
                    text: `${response.data.message}`,
                    confirmButtonText: 'OK'
                })
            }).catch((error) => {

                if (error.response && error.response.status === 422) {
                    Swal.fire({
                        icon: 'error',
                        text: `${JSON.stringify(postData)}`,
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

export const deleteTypeDepense = (id) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Êtes-vous sûr de vouloir supprimer ce Offrande ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimer',
            cancelButtonText: 'Non, annuler'
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`${url}type_depense/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_TYPE_DEPENSE, payload: id });
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