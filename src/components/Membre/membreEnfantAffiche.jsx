import React, { useState } from "react";
import { useSelector } from "react-redux";
import TableauEnfant from "../Tableau/EnfantTableau";
import { Link } from "react-router-dom";

const MembreEnfantAffiche = () => {
    const membreEnfants = useSelector((state) => state.enfantReducer);
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class=" text-center">Liste des membres enfants</h1>
                </div>
                <hr />
                <div className="col-md-4">
                    <Link to="/addmembreEnfant" class=" btn-success btn"><span class="btn btn-success">Ajouter un enfant membre</span></Link>

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
                                    id={dataEnfant.id}
                                    sexe={dataEnfant.sexe}
                                    famille={dataEnfant.famille}
                                    datenaisse={dataEnfant.datenaisse}
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