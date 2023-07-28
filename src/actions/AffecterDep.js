import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";


export const ADD_MEMBRE_AFFECTER = "ADD_MEMBRE_AFFECTER";
export const GET_MEMEBRE_AFFECTER = "GET_MEMEBRE_AFFECTER";
export const DELETE_AFFECTER = "DELETE_AFFECTER";
const url = "http://localhost:5000/api/";

export const getMenuAffecter = () => {
    return (dispatch) => {
        return axios.get(`${url}AffectationMenu`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
            dispatch({ type: GET_MEMEBRE_AFFECTER, payload: response.data.data })
        }).catch((error) => {
            
        })
    }
}

export const addMenuAffecter = (data) => {
    return (dispatch) => {
        return axios.post(`${url}AffectationMenu`,data,
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
            title: 'Êtes-vous sûr de vouloir supprimer ce membre ?',
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
                        dispatch({ type: DELETE_MENU_AAFECTER, payload: id });
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

export const getMouvementId = (id) => {
    return axios.get(`${url}mouvement/${id}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: Token()
        }
    }).then((response) => {
        return response.data.data;
    }).catch((error) => {
        alert(error)
    })

}


