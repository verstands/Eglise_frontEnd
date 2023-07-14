import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteTypeDepense } from '../../actions/TypeDepenseAction';


function RecetteFinance({nfiche, culte_id,montant,id, typeoffrance_id, devise, homme, femme, enfant}) {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td class="d-none d-xl-table-cell">{typeoffrance_id && typeoffrance_id.nom_typeoff}</td>
                <td class="d-none d-xl-table-cell">{montant}</td>
                <td class="d-none d-xl-table-cell">{devise && devise.devise}</td>
                <td class="d-none d-md-table-cell">
                    <button class="badge bg-danger btn" onClick={() => dispatch(deleteTypeDepense(id))}><span class="badge bg-danger">Delete</span></button>&nbsp;
                    <Link to="/updatemembre" class="badge bg-success btn"><span class="badge bg-success">Update</span></Link>&nbsp;
                </td>
            </tr>
        </>
    )
}

export default RecetteFinance


