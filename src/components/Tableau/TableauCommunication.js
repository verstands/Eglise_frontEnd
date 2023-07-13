import React from 'react'
import { Link } from 'react-router-dom'

function TableauCommunication({Departement, obejet, text}) {
    return (
        <tr>
            <td class="d-none d-xl-table-cell">{Departement}</td>
            <td class="d-none d-xl-table-cell">{obejet}</td>
            <td class="d-none d-xl-table-cell">{text}</td>
            <td class="d-none d-md-table-cell">
                <button class="badge bg-danger btn"><span class="badge bg-danger">Delete</span></button>&nbsp;
                <Link to="/updatemembre" class="badge bg-success btn"><span class="badge bg-success">Update</span></Link>&nbsp;
            </td>
        </tr>
    )
}

export default TableauCommunication