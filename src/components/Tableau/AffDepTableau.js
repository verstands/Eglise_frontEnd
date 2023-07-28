import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAffecter } from '../../actions/Affecter.action';
import { deleteMenuAffecter } from '../../actions/AffecterDep';

function MenuDepTableau({departement,n, id, menu}) {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td className="d-none d-xl-table-cell">{n}</td>
                <td className="d-none d-xl-table-cell">{menu && menu.nom_menu}</td>
                <td className="d-none d-xl-table-cell">{departement && departement.nom_depart}</td>
                <td className="d-none d-md-table-cell">
                    <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteMenuAffecter(id))}>
                        <i className="fa fa-trash" style={{ color: 'white' }}></i>
                    </button>&nbsp;
                </td>
            </tr>
        </>
    )
}

export default MenuDepTableau