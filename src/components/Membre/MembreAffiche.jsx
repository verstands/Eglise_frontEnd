import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isEmptyUtil } from "../../loadingErr/Utils";
import { useSelector } from "react-redux";
import TableauMembre from "../Tableau/membreApp";

const MembreAffiche = () => {
    const membres = useSelector((state) => state.membreReducer);
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h5 class="card-title mb-0 text-center">Liste des membres</h5>
                </div>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Postnom</th>
                            <th>Prenom</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    { Array.isArray(membres) && membres.map((data, index) => <TableauMembre nom={data.nom} postnom={data.postnom} prenom={data.prenom} email={data.email} telephone={data.telephone} key={index}/>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MembreAffiche;