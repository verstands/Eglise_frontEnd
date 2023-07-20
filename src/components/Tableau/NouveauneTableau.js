import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteNouveau } from '../../actions/Nouveau.action';


const NouveauneTableau = ({ nom, telephone, id, culte, egliseprovenance, categorie, adresse }) => {
    const dispatch = useDispatch();
    return (
        <tr>
            <td class="d-none d-xl-table-cell">{nom}</td>
            <td class="d-none d-xl-table-cell">{adresse}</td>
            <td class="d-none d-xl-table-cell">{telephone}</td>
            <td class="d-none d-xl-table-cell">{categorie}</td>
            <td class="d-none d-xl-table-cell">{culte && culte.nom_culte}</td>
            <td class="d-none d-xl-table-cell">{egliseprovenance}</td>
            <td class="d-none d-md-table-cell">
                <button class="btn-lg bg-danger btn" onClick={() => dispatch(deleteNouveau(id))}>
                    <i className="fa fa-trash" style={{ color: 'white' }}></i>
                </button>&nbsp;
                <Link to="/updatemembre" class="btn-lg bg-success btn">
                    <i className="fa fa-edit" style={{ color: 'white' }}></i>
                </Link>&nbsp;
            </td>
        </tr>
    )
}

export default NouveauneTableau