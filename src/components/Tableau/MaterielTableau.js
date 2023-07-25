import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteMateriel } from '../../actions/MaterielAction'

const MaterielTableau = ({ materiel, id, categorie_id, stock, cout, devide_id, id_departement }) => {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td class="d-none d-xl-table-cell">{materiel}</td>
                <td class="d-none d-xl-table-cell">{categorie_id}</td>
                <td class="d-none d-xl-table-cell">{stock}</td>
                <td class="d-none d-xl-table-cell">{cout}</td>
                <td class="d-none d-xl-table-cell">{devide_id}</td>
                <td class="d-none d-xl-table-cell">{id_departement}</td>
                <td class="d-none d-md-table-cell">
                    <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteMateriel(id))}>
                        <span class="badge bg-danger">
                            <i className="fa fa-trash" style={{ color: 'white' }}></i>
                        </span>
                    </button>&nbsp;
                    <Link to="/updatemembre"  className="btn-lg bg-success btn"><span class="badge bg-success">
                        <i className="fa fa-edit" style={{ color: 'white' }}></i>
                    </span></Link>&nbsp;
                </td>
            </tr>
        </>
    )
}

export default MaterielTableau