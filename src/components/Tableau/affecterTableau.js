import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAffecter } from '../../actions/Affecter.action';

function AffecterTableau({membre, id, departement}) {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td className="d-none d-xl-table-cell">{membre && membre.nom + " " + membre.prenom }</td>
                <td className="d-none d-xl-table-cell">{departement && departement.nom_depart}</td>
                <td className="d-none d-md-table-cell">
                    <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteAffecter(id))}>
                        <i className="fa fa-trash" style={{ color: 'white' }}></i>
                    </button>&nbsp;
                </td>
            </tr>
        </>
    )
}

export default AffecterTableau