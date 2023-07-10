import React, { useState } from "react";
import { Link } from "react-router-dom";

const AfficheCommunication = () => {
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h5 class="card-title mb-0 text-center">Liste des Recette</h5>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" class="form-control" placeholder="Date debut"  /><br />
                    </div>
                    <div className="col-md-3">
                        <input type="text" class="form-control" placeholder="Date fin" />
                    </div>
                    <div className="col-md-2">
                        <input type="text" class="form-control" placeholder="Nombre jour" />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary">Recherche</button>
                    </div>
                    <div className="col-md-3">
                    <button className="btn btn-primary">imprimer</button>
                </div>
                </div>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Date</th>
                            <th>Type depense</th>
                            <th>Montant</th>
                            <th>Devise</th>
                            <th>Beneficiaire</th>
                            <th>Caisse</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Project Apollo</td>
                            <td class="d-none d-xl-table-cell">01/01/2021</td>
                            <td class="d-none d-xl-table-cell">31/06/2021</td>
                            <td>Done</td>
                            <td>Done</td>
                            <td>Done</td>
                            <td>Done</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AfficheCommunication;