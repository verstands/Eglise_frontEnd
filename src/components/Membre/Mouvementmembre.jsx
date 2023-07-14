import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MouvementTableau from "../Tableau/MouvementTableau";

const Mouvementmembre = () => {
    const mouvement = useSelector((state) => state.mouvementReducer);
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class=" text-center">Liste des mouvements</h1>
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
                        Array.isArray(mouvement) && mouvement.map((dataEnfant, indexEnfant) => (
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