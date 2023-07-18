import React from 'react'

function affecterTableau({nom, id, departement}) {
    return (
        <>
            <tr>
                <td><i className="fa fa-user-circle" style={{ fontSize: '30px' }}></i></td>
                <td className="d-none d-xl-table-cell">{nom}</td>
                <td className="d-none d-xl-table-cell">{departement}</td>
                <td className="d-none d-md-table-cell">
                    <button className="btn-lg bg-danger btn" onClick={() => dispatch(deleteMembre(id))}>
                        <i className="fa fa-trash" style={{ color: 'white' }}></i>
                    </button>&nbsp;
                </td>
            </tr>
        </>
    )
}

export default affecterTableau