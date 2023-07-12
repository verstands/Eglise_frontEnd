import React from 'react'
import { Link } from "react-router-dom";


const NouveauneTableau = ({nom, telephone, culte, egliseprovenance, categorie, adresse}) => {
    return (
        <tr>
            <td class="d-none d-xl-table-cell">{nom}</td>
            <td class="d-none d-xl-table-cell">{adresse}</td>
            <td class="d-none d-xl-table-cell">{telephone}</td>
            <td class="d-none d-xl-table-cell">{categorie}</td>
            <td class="d-none d-xl-table-cell">{culte}</td>
            <td class="d-none d-xl-table-cell">{egliseprovenance}</td>
            <td class="d-none d-md-table-cell">
                <button class="badge bg-danger btn"><span class="badge bg-danger">Delete</span></button>&nbsp;
                <Link to="/updatemembre" class="badge bg-success btn"><span class="badge bg-success">Update</span></Link>&nbsp;
            </td>
        </tr>
    )
}

export default NouveauneTableau