import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MouvementTableau from "../Tableau/MouvementTableau";

const Mouvementmembre = () => {
    const mouvements = useSelector((state) => state.mouvementReducer);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class=" text-center">Liste des mouvements</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        &nbsp;&nbsp;<Link to="/AddmouvementMembre" className="btn btn-success btn-lg "><span ><i className="fa fa-add"></i></span></Link>
                        &nbsp;&nbsp;<Link to="/AddmouvementMembre" className="btn btn-success btn-lg "><span ><i className="fa fa-print"></i></span></Link>
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
                            <th>Mmebre</th>
                            <th>Date naissance</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(mouvements) && mouvements
                                .filter((data) => {
                                    if (typeof data.membre !== 'string'
                                    ) {
                                        return false; // ignore non-string values
                                    }
                                    return data.membre.toLowerCase().includes(searchTerm.toLowerCase())

                                })
                                .map((dataEnfant, indexEnfant) => (
                                    <MouvementTableau
                                        membre={dataEnfant.membre}
                                        id={dataEnfant.id}
                                        mission={dataEnfant.mission}
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

export default Mouvementmembre;