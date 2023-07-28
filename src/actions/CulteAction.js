import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";

export const GET_CULTE = "GET_CULTE";
export const DELETE_CULTE = "DELETE_CULTE";
export const ADD_CULTE = "ADD_CULTE";

const url = "http://localhost:5000/api/";


export const getCulte = () => {
    return(dispatch) => {
        return axios.get(`${url}cultes`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_CULTE, payload : response.data.data})
            }).catch((error) => {
               
            })
    }
}

export const deleteCulte = (id) => {
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
                    .delete(`${url}culte/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_CULTE, payload: id });
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


export const addCulte = (postData) => {
    return (dispatch) => {
        return axios.post(`${url}culte`, postData,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Token()
                }
            }).then((response) => {
                dispatch({ type: ADD_CULTE, payload: postData })
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