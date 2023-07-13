import React from 'react'
import { Link } from 'react-router-dom'

const MaterielTableau = ({materiel, categorie_id, stock, cout, devide_id, id_departement}) => {
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
                    <button class="badge bg-danger btn"><span class="badge bg-danger">Delete</span></button>&nbsp;
                    <Link to="/updatemembre" class="badge bg-success btn"><span class="badge bg-success">Update</span></Link>&nbsp;
                </td>
            </tr>
        </>
    )
}

export default MaterielTableau