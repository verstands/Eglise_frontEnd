import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DepenseTableau from "../Tableau/DepenseTableau";

const AfficheDepenseFinance = () => {
    const type_depense = useSelector((state) => state.TypeDepenseReducer)
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class="text-center">Liste des depenses</h1>
                    <hr />
                    <Link to="/DepenseFinance" class="btn-success btn"><span class="">Ajouter une depense</span></Link>
                    <br />
                    <br />
                    <div className="col-md-6">
                        <input 
                            type="text" 
                            placeholder="Recherche" 
                            className="form-control" 
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Caisse</th>
                            <th>Depense</th>
                            <th>Montant</th>
                            <th>Devise</th>
                            <th>Beneficiaire</th>
                            <th>Beneficiaire</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(type_depense) && type_depense
                            .filter((data) => {
                                if (typeof data.montant !== 'string') {
                                    return false; // ignore non-string values
                                }
                                return data.created_at.toLowerCase().includes(searchTerm.toLowerCase())
                              
                            })
                            .map((data, index) => (
                                <DepenseTableau
                                    date={data.created_at}
                                    id={data.id}
                                    caisse={data.caisse}
                                    depense={data.depense}
                                    montant={data.montant}
                                    devise={data.devise}
                                    beneficiaire={data.beneficiaire}
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

export default AfficheDepenseFinance;