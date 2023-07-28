import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";


export const GET_DEPENSE = "GET_DEPENSE";
export const DELETE_DEPENSE = "DELETE_DEPENSE";
export const ADD_DEPENSE = "ADD_DEPENSE";
const url = "http://localhost:5000/api/";


export const getDepense = () => {
    return (dispatch) => {
        return axios.get(`${url}depenses`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
            dispatch({ type: GET_DEPENSE, payload: response.data.data })
        }).catch((error) => {

        })
    }
}

export const deleteDepense = (id) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Êtes-vous sûr de vouloir supprimer type depense ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimer',
            cancelButtonText: 'Non, annuler'
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`${url}depense/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_DEPENSE, payload: id });
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

export const getDepenseId = (id) => {

    return axios.get(`${url}type_depense/${id}`, {
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


export const addRapportTypeDepnse= (du, au) => {
    return (dispatch) => {
        return axios.get(`${url}RapportTypeDepnse/${du}/${au}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Token()
                }
            }).then((response) => {
                return response.data.data;
            }).catch((error) => {
                alert(error + "depense");
            })
    }
}



export const addDepense = (postData) => {
    return (dispatch) => {
        return axios.post(`${url}depense`, postData,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Token()
                }
            }).then((response) => {
                dispatch({ type: ADD_DEPENSE, payload: postData })
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