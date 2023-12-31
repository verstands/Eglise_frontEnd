import React, { useState } from "react";
import { Link } from "react-router-dom";

const AffichePaie = () => {
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h5 class="card-title mb-0 text-center">Liste de Paiement</h5>
                </div>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Matricuke</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Montant prime</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Project Apollo</td>
                            <td class="d-none d-xl-table-cell">01/01/2021</td>
                            <td class="d-none d-xl-table-cell">31/06/2021</td>
                            <td>Done</td>
                            <td class="d-none d-md-table-cell">
                                <button class="badge bg-danger btn"><span class="badge bg-danger">Delete</span></button>&nbsp;
                                <Link  to="/updatemembre" class="badge bg-success btn"><span class="badge bg-success">Update</span></Link>&nbsp;
                                <Link to="/AddNouveau" class="badge bg-success btn"><span class="badge bg-success">Adds</span></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AffichePaie;