import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MouvementTableau from "../Tableau/MouvementTableau";

const Mouvementmembre = () => {
    const mouvement = useSelector((state) => state.mouvement);
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h5 class="card-title mb-0 text-center">Liste des mouvements</h5>
                </div>
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