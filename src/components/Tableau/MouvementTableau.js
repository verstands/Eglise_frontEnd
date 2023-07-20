import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteMouvement } from '../../actions/Mouvement.action';


const MouvementTableau = ({ mission,id,  membre }) => {
    const dispatch = useDispatch();
    let n = 1;
    return (
        <>
            <tr>
                <td>{n++}</td>
                <td>{membre && membre.nom}</td>
                <td class="d-none d-xl-table-cell">{mission && mission.mission}</td>
                <td class="d-none d-md-table-cell">
                    <button class="btn-lg bg-danger btn"  onClick={() => dispatch(deleteMouvement(id))}>
                    <i className="fa fa-trash" style={{color: 'white'}}></i>
                    </button>&nbsp;
                    <Link to={`/UpdateMouvement/${id}`} class="btn-lg bg-success btn">
                        <i className="fa-solid fa-edit" style={{color: 'white'}}></i>
                    </Link>&nbsp;
                </td>
            </tr>
        </>
    );
};

export default MouvementTableau;