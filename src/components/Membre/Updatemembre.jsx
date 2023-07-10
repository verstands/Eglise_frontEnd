import React from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";


const Updatemembre = () => {
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Modifier un membre</strong> </h1>
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Modifier un membre</h5>
                            </div>

                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Nom" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Postnom" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Prenom" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" class="form-control" placeholder="email" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Sexe" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Telephone" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Adresse" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Date de naissance" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Etat civil" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Proffesion" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Activite" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="password" class="form-control" placeholder="Mot de passe" />
                                    </div>
                                    <div className="col-md-4">
                                       <button className="btn btn-primary">Valider</button>
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

export default Updatemembre;