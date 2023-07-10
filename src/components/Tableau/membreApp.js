import React from 'react';
import { Link } from "react-router-dom";

const TableauMembre = ({ nom, postnom, prenom, email, telephone }) => {

    return (
        <>
            <tr>
                <td className="d-none d-xl-table-cell">{nom}</td>
                <td className="d-none d-xl-table-cell">{postnom}</td>
                <td className="d-none d-xl-table-cell">{prenom}</td>
                <td className="d-none d-md-table-cell">{email}</td>
                <td className="d-none d-md-table-cell">{telephone}</td>
                <td className="d-none d-md-table-cell">
                    <button className="badge bg-danger btn"><span className="badge bg-danger">Delete</span></button>&nbsp;
                    <Link to="/updatemembre" className="badge bg-success btn"><span className="badge bg-success">Update</span></Link>&nbsp;
                    <Link to="/detailmembre" className="badge bg-success btn"><span className="badge bg-success">Detail</span></Link>&nbsp;
                    <Link to="/addmembre" className="badge bg-success btn"><span className="badge bg-success">Adds</span></Link>
                </td>
            </tr>
        </>
    );

};

export default TableauMembre; 