import React from 'react'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
import { useDispatch } from 'react-redux'
import { deleteDepense } from '../../actions/DepenseAction';

const DepenseTableau = ({date, caisse, depense, montant, devise, beneficiaire, id }) => {
    const dispatch = useDispatch();
    return (
        <tr>
            <td class="d-none d-xl-table-cell">{dateFormat(date, "dd/mm/yyyy")}</td>
            <td class="d-none d-xl-table-cell">{caisse && caisse.nom_caisse}</td>
            <td>{depense && depense.depense}</td>
            <td>{montant}</td>
            <td>{devise && devise.devise}</td>
            <td>{beneficiaire}</td>
            <td class="d-none d-md-table-cell">
                <button class="btn-lg bg-danger btn" onClick={() => dispatch(deleteDepense(id))}>
                        <i className='fa fa-trash' style={{color: 'white'}}></i>
                </button>&nbsp;
                <Link to="/updatemembre"  class="btn-lg bg-success btn" style={{color: 'white'}}>
                    <i className='fa fa-edit'></i>
                </Link>&nbsp;
                <Link to={`/CarteDepense/${id}`} title='fiche de depenses'  class="btn-lg bg-success btn" style={{color: 'white'}}>
                    <i className='fa fa-credit-card'></i>
                </Link>&nbsp;
            </td>
        </tr>
    )
}

export default DepenseTableau
