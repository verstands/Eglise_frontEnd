import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteCulte } from '../../actions/CulteAction';
import { deleteOffrande } from '../../actions/OffrandeAction';

function OffrandeTableau({nom, id,}) {
    const dispatch = useDispatch();

    return (
        <tr>
            <td className="d-none d-xl-table-cell">{nom}</td>
            <td className="d-none d-md-table-cell">
                <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteOffrande(id))}>
                    <i className="fa fa-trash" style={{ color: 'white' }}></i>
                </button>&nbsp;
            </td>
        </tr>
    )
}

export default OffrandeTableau