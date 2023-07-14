import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";

export const GET_CULTE = "GET_CULTE";
export const DELETE_CULTE = "DELETE_CULTE";

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