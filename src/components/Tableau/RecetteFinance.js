import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteTypeDepense } from '../../actions/TypeDepenseAction';


function RecetteFinance({ nfiche, culte_id, montant, id, typeoffrance_id, devise, homme, femme, enfant }) {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td class="d-none d-xl-table-cell">{typeoffrance_id && typeoffrance_id.nom_typeoff}</td>
                <td class="d-none d-xl-table-cell">{montant}</td>
                <td class="d-none d-xl-table-cell">{devise && devise.devise}</td>
                <td class="d-none d-md-table-cell">
                    <button class="btn-lg bg-danger btn" onClick={() => dispatch(deleteTypeDepense(id))}>
                        <i className="fa fa-trash" style={{ color: 'white' }}></i>
                    </button>&nbsp;
                    <Link to="/updatemembre" class="btn-lg bg-success btn">
                        <i className="fa fa-edit" style={{ color: 'white' }}></i>
                    </Link>&nbsp;
                </td>
            </tr>
        </>
    )
}

export default RecetteFinance


