import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NouveauneTableau from "../Tableau/NouveauneTableau";
import Loading from "../../loadingErr/Loading";

const AfficheNouveau = () => {
    const nouveaune = useSelector((state) => state.nouveauneReducer);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class="text-center">Liste des nouveau ne(e)s</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/AddNouveau">&nbsp;&nbsp;<span class="btn-lg btn-success">
                            <i className="fa fa-add"></i>
                        </span></Link>
                        <Link to="/NouveauneePdf">&nbsp;&nbsp;<span class="btn-lg btn-success">
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
                        {Array.isArray(nouveaune) && nouveaune
                            .filter((data) => {
                                if (typeof data.nom !== 'string' ||
                                    typeof data.adresse !== 'string' ||
                                    typeof data.egliseprovenance !== 'string' ||
                                    typeof data.telephone !== 'string'
                                ) {
                                    return false; // ignore non-string values
                                }
                                return data.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    data.adresse.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    data.telephone.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    data.egliseprovenance.toLowerCase().includes(searchTerm.toLowerCase())

                            })
                            .map((data, index) => (
                                <NouveauneTableau
                                    nom={data.nom}
                                    adresse={data.adresse}
                                    telephone={data.telephone}
                                    id={data.id} culte={data.culte}
                                    egliseprovenance={data.egliseprovenance}
                                    categorie={data.categorie}
                                    key={index} />
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AfficheNouveau;