import React, { useState } from "react";
import { useSelector } from "react-redux";
import TableauEnfant from "../Tableau/EnfantTableau";

const MembreEnfantAffiche = () => {
    const membreEnfants = useSelector((state) => state.enfantReducer);
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h5 class="card-title mb-0 text-center">Liste des membres enfants</h5>
                </div>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Date naissance</th>
                            <th>Sexe</th>
                            <th>Famille</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(membreEnfants) && membreEnfants.map((dataEnfant, indexEnfant) => (
                                <TableauEnfant
                                    nom={dataEnfant.nom}
                                    sexe={dataEnfant.sexe}
                                    famille={dataEnfant.famille}
                                    key={indexEnfant}
                                />
                            ))
                       }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MembreEnfantAffiche;