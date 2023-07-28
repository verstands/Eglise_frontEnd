import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteCaisse } from '../../actions/CaisseAction';

function CaisseTableau({caisse, id, devise, montant}) {
    const dispatch = useDispatch();

    return (
        <tr>
            <td className="d-none d-xl-table-cell">{caisse}</td>
            <td className="d-none d-xl-table-cell">{montant}</td>
            <td className="d-none d-xl-table-cell">{devise && devise.devise}</td>
            <td className="d-none d-md-table-cell">
                <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteCaisse(id))}>
                    <i className="fa fa-trash" style={{ color: 'white' }}></i>
                </button>&nbsp;
            </td>
        </tr>
    )
}

export default CaisseTableau