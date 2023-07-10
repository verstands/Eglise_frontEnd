import React from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";


const AddMembreEnfant = () => {
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Ajouter un membre enfant</strong> </h1>
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Ajouter un membre enfant</h5>
                            </div>

                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Nom" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Date de naissance" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Sexe" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" class="form-control" placeholder="Famille" /><br />
                                    </div>
                                    <div className="col-md-12">
                                       <button className="btn btn-primary">Enregistrer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
 )
}
export default AddMembreEnfant;