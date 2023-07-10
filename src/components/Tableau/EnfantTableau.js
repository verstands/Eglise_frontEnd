import React from 'react';
import { Link } from "react-router-dom";

const TableauEnfant = ({ nom, sexe, famille, email, telephone }) => {

    return (
        <>
            <tr>
                <td class="d-none d-xl-table-cell">{nom}</td>
                <td class="d-none d-xl-table-cell">{sexe}</td>
                <td class="d-none d-xl-table-cell">{famille}</td>
                <td class="d-none d-md-table-cell">
                    <button class="badge bg-danger btn"><span class="badge bg-danger">Delete</span></button>&nbsp;
                    <Link to="/updatemembre" class="badge bg-success btn"><span class="badge bg-success">Update</span></Link>&nbsp;
                    <Link to="/addmembreEnfant" class="badge bg-success btn"><span class="badge bg-success">Adds</span></Link>
                </td>
            </tr>
        </>
    );

};

export default TableauEnfant; 