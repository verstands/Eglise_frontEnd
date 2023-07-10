import React from 'react';
import { Link } from "react-router-dom";


const MouvementTableau = ({ mission, membre }) => {
    return (
        <>
            <tr>
                <td>{membre}</td>
                <td class="d-none d-xl-table-cell">{mission}</td>
                <td class="d-none d-md-table-cell">
                    <button class="badge bg-danger btn"><span class="badge bg-danger">Delete</span></button>&nbsp;
                    <Link to="/updatemembre" class="badge bg-success btn"><span class="badge bg-success">Update</span></Link>&nbsp;
                    <Link to="/AddmouvementMembre" class="badge bg-success btn"><span class="badge bg-success">Adds</span></Link>
                </td>
            </tr>
        </>
    );
};

export default MouvementTableau;