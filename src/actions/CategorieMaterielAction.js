import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";

export const GET_CATEGORIE_MATERIEL = "GET_CATEGORIE_MATERIEL";
export const DELETE_CATEGORIE_MATERIEL = "DELETE_CATEGORIE_MATERIEL";
const url = "http://localhost:5000/api/";


export const getCategorieMateriel = () => {
    return (dispatch) => {
        return axios.get(`${url}categorie_materiels`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
            dispatch({ type: GET_CATEGORIE_MATERIEL, payload: response.data.data })
        }).catch((error) => {

        })
    }
}

//delete
export const deleteCategorieMateriel = (id) => {
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
                    .delete(`${url}categorie_materiel/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_CATEGORIE_MATERIEL, payload: id });
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