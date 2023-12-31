import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteTypeDepense } from '../../actions/TypeDepenseAction';
import { deleteFinance } from '../../actions/FinanceAction';


function ConsultationTableau({ nfiche, culte_id,effectif, montant, id, typeoffrance_id, devise, homme, femme, enfant, created_at }) {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td class="d-none d-xl-table-cell">{typeoffrance_id && typeoffrance_id.nom_typeoff}</td>
                <td class="d-none d-xl-table-cell">{culte_id && culte_id.nom_culte}</td>
                <td class="d-none d-xl-table-cell">{montant}</td>
                <td class="d-none d-xl-table-cell">{devise && devise.devise}</td>
                <td class="d-none d-xl-table-cell">{homme}</td>
                <td class="d-none d-xl-table-cell">{femme}</td>
                <td class="d-none d-xl-table-cell">{enfant}</td>
                <td class="d-none d-xl-table-cell">{effectif}</td>
            </tr>
        </>
    )
}

export default ConsultationTableau


