import React, { useState } from "react";
import { Link } from "react-router-dom";

const AffecterMembre = () => {
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h5 class="card-title mb-0 text-center">Affecter un membre de departement</h5>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" class="form-control" placeholder="Nom membre" /><br />
                    </div>
                    <div className="col-md-6">
                        <input type="text" class="form-control" placeholder="Departement" />
                    </div>
                    <div className="col-md-4">
                        <input name="v" type="checkbox" placeholder="Departement" />Cochet tout
                        <input name="v" type="checkbox" placeholder="Departement" />Decochet tout
                    </div>
                    <br />
                    <div className="col-md-12">
                        <button className="btn btn-primary">Valider</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AffecterMembre;