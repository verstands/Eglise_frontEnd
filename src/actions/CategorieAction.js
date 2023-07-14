import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";

export const GET_CATEGORIE = "GET_CATEGORIE";
export const DELETE_CATEGORIE = "DELETE_CATEGORIE";
const url = "http://localhost:5000/api/";


export const getCategorie = () => {
    return (dispatch) => {
        return axios.get(`${url}categories`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
            dispatch({ type: GET_CATEGORIE, payload: response.data.data })
        }).catch((error) => {

        })
    }
}

//delete
export const deleteCategorie = (id) => {
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
                    .delete(`${url}caisse/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_CATEGORIE, payload: id });
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