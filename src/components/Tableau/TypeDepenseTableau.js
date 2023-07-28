import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteDepense } from '../../actions/DepenseAction';

function CulteTableau({nom, id,}) {
    const dispatch = useDispatch();

    return (
        <tr>
            <td className="d-none d-xl-table-cell">{nom}</td>
            <td className="d-none d-md-table-cell">
                <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteDepense(id))}>
                    <i className="fa fa-trash" style={{ color: 'white' }}></i>
                </button>&nbsp;
            </td>
        </tr>
    )
}

export default CulteTableau