import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCommunication } from '../../actions/CommunicationAction';

function TableauCommunication({Departement,id, obejet, text}) {
    const dispatch = useDispatch();
    return (
        <tr>
            <td class="d-none d-xl-table-cell">{Departement}</td>
            <td class="d-none d-xl-table-cell">{obejet}</td>
            <td class="d-none d-xl-table-cell">{text}</td>
            <td class="d-none d-md-table-cell">
                <button class="badge bg-danger btn"  onClick={() => dispatch(deleteCommunication(id))}><span class="badge bg-danger">Delete</span></button>&nbsp;
                <Link to="/updatemembre" class="badge bg-success btn"><span class="badge bg-success">Update</span></Link>&nbsp;
            </td>
        </tr>
    )
}

export default TableauCommunication