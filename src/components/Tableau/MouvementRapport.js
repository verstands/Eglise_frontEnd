import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteMouvement } from '../../actions/Mouvement.action';
import dateFormat from 'dateformat';


const MouvementRapport = ({n, mission,id,typemouvement,   membre, created_at }) => {
    const dispatch = useDispatch();

    return (
        <>
            <tr>
                <td>{n}</td>
                <td class="d-none d-xl-table-cell">{typemouvement && typemouvement.nom_typem}</td>
                <td class="d-none d-xl-table-cell">{dateFormat(created_at, 'dd/mm/yyyy')}</td>
                <td class="d-none d-xl-table-cell">{membre && membre.nom}</td>
            </tr>
        </>
    );
};

export default MouvementRapport;