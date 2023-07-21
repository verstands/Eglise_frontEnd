import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";


function NouveauRapport({n, nom, telephone, id, culte, egliseprovenance, categorie, adresse }) {
    const dispatch = useDispatch();
    return (
        <tr>
            <td class="d-none d-xl-table-cell">{n}</td>
            <td class="d-none d-xl-table-cell">{nom}</td>
            <td class="d-none d-xl-table-cell">{adresse}</td>
            <td class="d-none d-xl-table-cell">{telephone}</td>
            <td class="d-none d-xl-table-cell">{categorie}</td>
            <td class="d-none d-xl-table-cell">{culte && culte.nom_culte}</td>
            <td class="d-none d-xl-table-cell">{egliseprovenance}</td>
        </tr>
    )
}

export default NouveauRapport