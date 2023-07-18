import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecetteFinance from "../Tableau/RecetteFinance";

const AfficheRecetteFinance = () => {
    const finance = useSelector((state) => state.financeReducer);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (<>
        <div class="card flex-fill">
            <div class="card-header">
                <h1 class="text-center">Liste des Recettes</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Link to="/AddRecetteFinance">&nbsp;&nbsp;<span class="btn-lg btn-success">
                        <i className="fa fa-add"></i>
                    </span></Link>
                    <Link to="">&nbsp;&nbsp;<span class="btn-lg btn-success">
                        <i className="fa fa-print"></i>
                    </span></Link>
                </div>
                <div className="col-md-6">
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
                        <th>Type offrande</th>
                        <th>Montant</th>
                        <th>Devise</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(finance) && finance
                        .filter((data) => {
                            if (typeof data.nfiche !== 'string'
                            ) {
                                return false; // ignore non-string values
                            }
                            return data.nfiche.toLowerCase().includes(searchTerm.toLowerCase())
                        })
                        .map((data, index) =>
                            <RecetteFinance
                                nfiche={data.nfiche}
                                culte_id={data.culte_id}
                                montant={data.montant}
                                typeoffrance_id={data.typeoffrande}
                                devise={data.devise}
                                homme={data.homme}
                                femme={data.femme}
                                enfant={data.enfant}
                                key={index} />)}
                </tbody>
            </table>
        </div>
    </>
    )
}

export default AfficheRecetteFinance;