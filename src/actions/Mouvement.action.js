import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";


export const GET_MOUVEMENTS = "GET_MOUVEMENTS";
export const DELETE_MOUVEMENT = "DELETE_MOUVEMENT";
const url = "http://localhost:5000/api/";


export const getMouvements = () => {
    return (dispatch) => {
        return axios.get(`${url}mouvements`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
            dispatch({ type: GET_MOUVEMENTS, payload: response.data.data })
        }).catch((error) => {

        })
    }
}

export const deleteMouvement = (id) => {
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
                    .delete(`${url}mouvement/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_MOUVEMENT, payload: id });
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

export const addRapportMembreMouvement = ({ datadebut, datafin, nom }) => {
    return (dispatch) => {
        return axios.get(`${url}mouvementmembre/${datadebut},${datafin},${nom}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: Token()
                }
            }).then((response) => {
                return response.data.data;
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