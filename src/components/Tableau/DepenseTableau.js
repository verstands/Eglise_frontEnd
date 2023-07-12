import React from 'react'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'

function DepenseTableau({date, caisse, depense, montant, devise, beneficiaire }) {
    return (
        <tr>
            <td class="d-none d-xl-table-cell">{dateFormat(date, "dd/mm/yyyy")}</td>
            <td class="d-none d-xl-table-cell">{caisse && caisse.nom_caisse}</td>
            <td>{depense && depense.depense}</td>
            <td>{montant}</td>
            <td>{devise && devise.devise}</td>
            <td>{beneficiaire}</td>
            <td class="d-none d-md-table-cell">
                <button class="badge bg-danger btn"><span class="badge bg-danger">Delete</span></button>&nbsp;
                <Link to="/updatemembre" class="badge bg-success btn"><span class="badge bg-success">Update</span></Link>&nbsp;
                <Link to="/DepenseFinance" class="badge bg-success btn"><span class="badge bg-success">Adds</span></Link>
            </td>
        </tr>
    )
}

export default DepenseTableau
