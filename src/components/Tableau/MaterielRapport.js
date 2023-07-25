import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteMateriel } from '../../actions/MaterielAction'

const MaterielRapport = ({ n, materiel, id, categorie_id, stock, cout, devide_id, id_departement }) => {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td class="d-none d-xl-table-cell">{n}</td>
                <td class="d-none d-xl-table-cell">{materiel}</td>
                <td class="d-none d-xl-table-cell">{categorie_id && categorie_id.nom}</td>
                <td class="d-none d-xl-table-cell">{stock}</td>
                <td class="d-none d-xl-table-cell">{cout}</td>
                <td class="d-none d-xl-table-cell">{devide_id && devide_id.devise}</td>
                <td class="d-none d-xl-table-cell">{id_departement && id_departement.nom_depart}</td>
            </tr>
        </>
    )
}

export default MaterielRapport