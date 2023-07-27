import React from 'react';
import { Link } from "react-router-dom";
import { deleteMembre } from '../../actions/membre.action';
import { useDispatch } from 'react-redux';

const TableauMembre = ({ id, nom, postnom, prenom, email, telephone }) => {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td><i className="fa fa-user-circle" style={{fontSize :'30px'}}></i></td>
                <td className="d-none d-xl-table-cell">{nom}</td>
                <td className="d-none d-xl-table-cell">{postnom}</td>
                <td className="d-none d-xl-table-cell">{prenom}</td>
                <td className="d-none d-md-table-cell">{email}</td>
                <td className="d-none d-md-table-cell">{telephone}</td>
                <td className="d-none d-md-table-cell">
                    <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteMembre(id))}>
                        <i className="fa fa-trash" style={{color: 'white'}}></i>
                    </button>&nbsp;
                    <Link to={`/updatemembre/${id}`} title='Modifier' className="btn-lg bg-success btn">
                        <i className="fa fa-edit" style={{color: 'white'}}></i>
                    </Link>&nbsp;
                    <Link to={`/detailmembre/${id}`} title='Detail' className="btn-lg bg-success btn">
                        <i className="fa-solid fa-info" style={{color: 'white'}}></i>
                    </Link>&nbsp;
                    <Link to={`/MembrePdfId/${id}`} title='Detail' className="btn-lg bg-success btn">
                        <i className="fa-solid fa-user-circle" style={{color: 'white'}}></i>
                    </Link>&nbsp;
                    <Link to={`/MembrePdfIdFiche/${id}`} title='Detail' className="btn-lg bg-success btn">
                        <i className="fa-solid fa-credit-card" style={{color: 'white'}}></i>
                    </Link>&nbsp;
                </td>
            </tr>
        </>
    );

};

export default TableauMembre; 