import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteDepartement } from '../../actions/Departemant.action';

function DepartementTableau({nom_departement, id}) {
    const dispatch = useDispatch();
    return (
        <tr>
            <td className="d-none d-xl-table-cell">{nom_departement}</td>
            <td className="d-none d-md-table-cell">
                <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteDepartement(id))}>
                    <i className="fa fa-trash" style={{ color: 'white' }}></i>
                </button>&nbsp;
            </td>
        </tr>
    )
}
export default DepartementTableau