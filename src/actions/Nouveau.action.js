import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";

export const GET_NOUVEAUNE = "GET_MOUVEMENT";
export const ADD_NOUVEAUNE = "GET_MOUVEMENT";
export const DELETE_NOUVEAU = "DELETE_NOUVEAU";
const url = "http://localhost:5000/api/";

export const getNouveaune = () => {
    return (dispatch) => {
        return axios.get(`${url}nouveauvenus`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
            dispatch({ type: GET_NOUVEAUNE, payload: response.data.data })
        }).catch((error) => {

        })
    }
}

export const addNouveau = (postData) => {
    return (dispatch) => {
        return axios.post(`${url}nouveauvenu`, postData,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Token()
                }
            }).then((response) => {
                dispatch({ type: ADD_NOUVEAUNE, payload: postData })
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

export const deleteNouveau = (id) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Êtes-vous sûr de vouloir supprimer ce nouveau ne(é) ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimer',
            cancelButtonText: 'Non, annuler'
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`${url}nouveauvenu/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_NOUVEAU, payload: id });
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

export const getNouveauId = (id) => {

    return axios.get(`${url}nouveauvenu/${id}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: Token()
        }
    }).then((response) => {
        return response.data.data;
    }).catch((error) => {

    })

}

export const addRapportNouveau = (du, au) => {
    return (dispatch) => {
        return axios.get(`${url}RapportNouveau/${du}/${au}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Token()
                }
            }).then((response) => {
                return response.data.data;
            }).catch((error) => {
                alert(error);
            })
    }
}
