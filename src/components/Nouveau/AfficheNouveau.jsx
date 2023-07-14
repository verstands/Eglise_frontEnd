import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NouveauneTableau from "../Tableau/NouveauneTableau";
import Loading from "../../loadingErr/Loading";

const AfficheNouveau = () => {
    const nouveaune = useSelector((state) => state.nouveauneReducer);
    const [loading, setLoading] = useState(true);
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h5 class="card-title mb-0 text-center">Liste des membres enfants</h5>
                </div>
                <Link to="/AddNouveau">&nbsp;&nbsp;<span class="btn btn-success">Ajouter nouveau né(e)</span></Link>

                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Adresse</th>
                            <th>Telephone</th>
                            <th>Categorie</th>
                            <th>Culte</th>
                            <th>Eglise provenance</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Array.isArray(nouveaune) && nouveaune.map((data, index) => <NouveauneTableau nom={data.nom} adresse={data.adresse} telephone={data.telephone} id={data.id} culte={data.culte} egliseprovenance={data.egliseprovenance} categorie={data.categorie} key={index}/>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AfficheNouveau;