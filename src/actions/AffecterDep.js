import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";


export const ADD_MENU_AFFECTER = "ADD_MENU_AFFECTER";
export const GET_MENU_AFFECTER = "GET_MENU_AFFECTER";
export const DELETE_MENU_AFFECTER = "DELETE_MENU_AFFECTER";
const url = "http://localhost:5000/api/";

export const getMenuAffecter = () => {
    return (dispatch) => {
        return axios.get(`${url}AffectationMenus`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
            dispatch({ type: GET_MENU_AFFECTER, payload: response.data.data })
        }).catch((error) => {

        })
    }
}

export const addMenuAffecter = (data) => {
    return (dispatch) => {
        return axios.post(`${url}AffectationMenu`, data,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Token()
                }
            }).then((response) => {
                dispatch({ type: ADD_MENU_AFFECTER, payload: data })
                Swal.fire({
                    icon: 'success',
                    text: `${response.data.message}`,
                    confirmButtonText: 'OK'
                })
            }).catch((error) => {
                if (error.response && error.response.status === 422) {
                    Swal.fire({
                        icon: 'error',
                        text: `Tous les champs sont obligatoire !`,
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

export const deleteMenuAffecter = (id) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Êtes-vous sûr de vouloir supprimer l\'affectation ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimer',
            cancelButtonText: 'Non, annuler'
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`${url}AffectationMenu/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_MENU_AFFECTER, payload: id });
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


