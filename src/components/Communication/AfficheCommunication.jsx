import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableauCommunication from "../Tableau/TableauCommunication";

const AfficheCommunication = () => {
    const communication = useSelector((state) => state.communicationReducer);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class=" text-center">Liste des communication</h1>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-primary">imprimer</button>
                    </div>
                    <br />
                    <br />
                    <div className="col-md-3">
                    <input 
                            type="text" 
                            placeholder="Recherche departement" 
                            className="form-control" 
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>Departemenr</th>
                            <th>Objet</th>
                            <th>Text</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(communication) && communication
                            .filter((data) => {
                                if (typeof data.Departement !== 'string') {
                                    return false; // ignore non-string values
                                }
                                return data.Departement.toLowerCase().includes(searchTerm.toLowerCase())
                              
                            })
                            .map((data, index) => (
                                <TableauCommunication
                                    Departement={data.Departement}
                                    obejet={data.obejet}
                                    text={data.text}
                                    key={index}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AfficheCommunication;