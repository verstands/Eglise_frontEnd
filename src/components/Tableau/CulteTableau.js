import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteCaisse } from '../../actions/CaisseAction';
import { deleteCategorie } from '../../actions/CategorieAction';
import { deleteCulte } from '../../actions/CulteAction';

function CulteTableau({nom, id,}) {
    const dispatch = useDispatch();

    return (
        <tr>
            <td className="d-none d-xl-table-cell">{nom}</td>
            <td className="d-none d-md-table-cell">
                <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteCulte(id))}>
                    <i className="fa fa-trash" style={{ color: 'white' }}></i>
                </button>&nbsp;
            </td>
        </tr>
    )
}

export default CulteTableau