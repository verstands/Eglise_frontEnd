import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteDevise } from '../../actions/DeviseAction';
import { deleteCategorieMateriel } from '../../actions/CategorieMaterielAction';

function TypeMaterielTableau({nom, id,}) {
    const dispatch = useDispatch();

    return (
        <tr>
            <td className="d-none d-xl-table-cell">{nom}</td>
            <td className="d-none d-md-table-cell">
                <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteCategorieMateriel(id))}>
                    <i className="fa fa-trash" style={{ color: 'white' }}></i>
                </button>&nbsp;
            </td>
        </tr>
    )
}

export default TypeMaterielTableau