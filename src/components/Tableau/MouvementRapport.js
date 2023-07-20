import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteMouvement } from '../../actions/Mouvement.action';


const MouvementRapport = ({ mission,id,  membre, created_at }) => {
    const dispatch = useDispatch();
    let n = 1;
    return (
        <>
            <tr>
                <td>{n++}</td>
                <td class="d-none d-xl-table-cell">{membre && membre.nom}</td>
                <td class="d-none d-xl-table-cell">{id}</td>
                <td class="d-none d-xl-table-cell">{created_at}</td>
            </tr>
        </>
    );
};

export default MouvementRapport;