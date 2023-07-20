import React, { useState } from "react";
import { useSelector } from "react-redux";
import TableauEnfant from "../Tableau/EnfantTableau";
import { Link } from "react-router-dom";

const MembreEnfantAffiche = () => {
    const membreEnfants = useSelector((state) => state.enfantReducer);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class=" text-center">Liste des membres enfants</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        &nbsp;&nbsp;<Link to="/addmembreEnfant" class=" btn-success btn-lg btn"><i className="fa fa-add"></i></Link>
                        &nbsp;&nbsp; <Link to="/MembreEnfantPdf" class=" btn-success btn-lg btn"><i className="fa fa-print"></i></Link>
                    </div>
                    <div className="col-md-5">
                        <input
                            type="text"
                            placeholder="Recherche..."
                            className="form-control"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <hr />
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nom</th>
                            <th>Date naissance</th>
                            <th>Sexe</th>
                            <th>Famille</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(membreEnfants) && membreEnfants
                            .filter((data) => {
                                if (typeof data.nom !== 'string' ||
                                    typeof data.sexe !== 'string' ||
                                    typeof data.famille !== 'string' ||
                                    typeof data.datenaisse !== 'string'
                                ) {
                                    return false; // ignore non-string values
                                }
                                return data.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    data.sexe.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    data.famille.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    data.datenaisse.toLowerCase().includes(searchTerm.toLowerCase())

                            })
                            .map((dataEnfant, indexEnfant) => (
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