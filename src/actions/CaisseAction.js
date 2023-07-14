import axios from "axios";
import Token from "../loadingErr/Token";
import Swal from "sweetalert2";


export const GET_CAISSE = "GET_CAISSE";
export const DELETE_CAISSE = "DELETE_CAISSE";
const url = "http://localhost:5000/api/";


export const getCaisse = () => {
    return(dispatch) => {
        return axios.get(`${url}caisses`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: Token()
            }
        }).then((response) => {
                dispatch({type : GET_CAISSE, payload : response.data.data})
            }).catch((error) => {
                
            })
    }
}

export const deleteCaisse = (id) => {
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
                    .delete(`${url}caisse/${id}`, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: Token()
                        }
                    })
                    .then((response) => {
                        dispatch({ type: DELETE_CAISSE, payload: id });
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