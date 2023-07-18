import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isEmptyUtil } from "../../loadingErr/Utils";
import { useSelector } from "react-redux";
import TableauMembre from "../Tableau/membreApp";

const MembreAffiche = () => {
    const membres = useSelector((state) => state.membreReducer);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class=" text-center">Liste des membres</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        &nbsp;&nbsp;<Link to="/addmembre" className="btn btn-success btn-lg "><span ><i className="fa fa-add"></i></span></Link>
                        &nbsp;&nbsp;<Link to="/Listemembres" className="btn btn-success btn-lg "><span ><i className="fa fa-print"></i></span></Link>
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
                            <th>Postnom</th>
                            <th>Prenom</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(membres) && membres
                            .filter((data) => {
                                if (typeof data.nom !== 'string' || 
                                    typeof data.postnom !== 'string' ||
                                    typeof data.prenom !== 'string' ||
                                    typeof data.email !== 'string' ||
                                    typeof data.telephone !== 'string'
                                ) {
                                    return false; // ignore non-string values
                                }
                                return data.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                data.postnom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                data.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                data.telephone.toLowerCase().includes(searchTerm.toLowerCase()) 
                              
                            })
                            .map((data, index) => (
                                <TableauMembre 
                                id={data.id} 
                                nom={data.nom} 
                                postnom={data.postnom} 
                                prenom={data.prenom} 
                                email={data.email} 
                                telephone={data.telephone} 
                                key={index} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MembreAffiche;