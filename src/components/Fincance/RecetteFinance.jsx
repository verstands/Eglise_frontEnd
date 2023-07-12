import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecetteFinance from "../Tableau/RecetteFinance";

const AfficheRecetteFinance = () => {
    const finance = useSelector((state) => state.financeReducer);

    return (<>
        <div class="card flex-fill">
            <div class="card-header">
                <h5 class="card-title mb-0 text-center">Liste des Recette</h5>
            </div>
            &nbsp;&nbsp;<Link to="/AddRecetteFinance" className="btn btn-success btn col-md-2"><span className="badge bg-success">Ajouter une recette</span></Link>
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
                    { Array.isArray(finance) && finance.map((data, index) => <RecetteFinance nfiche={data.nfiche} culte_id={data.culte_id} montant={data.montant} typeoffrance_id={data.typeoffrande} devise={data.devise} homme={data.homme} femme={data.femme} enfant={data.enfant}  key={index}/>)}
                </tbody>
            </table>
        </div>
    </>
    )
}

export default AfficheRecetteFinance;