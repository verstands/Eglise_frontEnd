import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCommunication } from '../../actions/CommunicationAction';
import dateFormat from 'dateformat';


function TableauCommunication({Departement,id, obejet, text, date, typemessage}) {
    const dispatch = useDispatch();
    return (
        <tr>
            <td class="d-none d-xl-table-cell">{Departement && Departement.nom_depart}</td>
            <td class="d-none d-xl-table-cell">{obejet}</td>
            <td class="d-none d-xl-table-cell">{text}</td>
            <td class="d-none d-xl-table-cell">{typemessage}</td>
            <td class="d-none d-xl-table-cell">{dateFormat(date, 'dd/mm/yyyy')}</td>
            <td class="d-none d-md-table-cell">
                <button class="btn-lg bg-danger btn"  onClick={() => dispatch(deleteCommunication(id))}>
                    <i className="fa fa-trash" style={{ color: 'white' }}></i>
                </button>&nbsp;
                <Link to="/updatemembre" class="btn-lg bg-success btn">
                     <i className="fa fa-edit" style={{ color: 'white' }}></i>
                </Link>&nbsp;
            </td>
        </tr>
    )
}

export default TableauCommunication