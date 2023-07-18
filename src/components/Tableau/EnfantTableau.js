import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteEnfant } from '../../actions/Enfant.action';

const TableauEnfant = ({ id, nom, sexe, famille, datenaisse, telephone }) => {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td><i className="fa fa-user-circle" style={{fontSize :'30px'}}></i></td>
                <td class="d-none d-xl-table-cell">{nom}</td>
                <td class="d-none d-xl-table-cell">{datenaisse}</td>
                <td class="d-none d-xl-table-cell">{sexe}</td>
                <td class="d-none d-xl-table-cell">{famille}</td>
                <td class="d-none d-md-table-cell">
                    <button class="btn-lg bg-danger btn" onClick={() => dispatch(deleteEnfant(id))} >
                        <i className="fa fa-trash" style={{color: 'white'}}></i>
                    </button>&nbsp;
                    <Link to={`/updatemembreEnfant/${id}`} class="btn-lg bg-success btn">
                        <i className="fa fa-edit" style={{color: 'white'}}></i>
                    </Link>&nbsp;
                </td>
            </tr>
        </>
    );

};

export default TableauEnfant; 