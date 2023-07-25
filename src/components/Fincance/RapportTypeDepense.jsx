import React from 'react'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import { useDispatch } from 'react-redux'
import { deleteDepense } from '../../actions/DepenseAction';

const RapportTypeDepense = ({date, caisse, depense, montant, devise, id , n}) => {
    const dispatch = useDispatch();
    return (
        <tr>
            <td>{n}</td>
            <td class="d-none d-xl-table-cell">{dateFormat(date, "dd/mm/yyyy")}</td>
            <td class="d-none d-xl-table-cell">{caisse && caisse.nom_caisse}</td>
            <td>{depense && depense.depense}</td>
            <td>{montant}</td>
            <td>{devise && devise.devise}</td>
        </tr>
    )
}

export default RapportTypeDepense