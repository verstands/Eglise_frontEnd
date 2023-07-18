import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";


export const GET_MEMBRE_ENFANT = "GET_MEMBRE_ENFANT";
export const DELETE_MEMBRE_ENFANT = "DELETE_MEMBRE_ENFANT";
const url = "http://localhost:5000/api/";


export const getMembreEnfant = () => {
    return(dispatch) => {
        return axios.get(`${url}membreenfants`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_MEMBRE_ENFANT, payload : response.data.data})
            }).catch((error) => {
              
            })
    }
}

export const deleteEnfant = (id) => {
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
                    .delete(`${url}membreenfant/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_MEMBRE_ENFANT, payload: id });
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

export const getMembreEnfantId = (id) => {

    return axios.get(`${url}membreenfant/${id}`, {
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

