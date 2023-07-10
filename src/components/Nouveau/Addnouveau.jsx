import React from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";


const AddNouveau = () => {
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Ajouter un nouveau venu</strong> </h1>
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Ajouter un nouveau venut</h5>
                            </div>

                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Nom" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Adresse" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Telephone" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" class="form-control" placeholder="Categorie jeune frere" /><br />
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
export default AddNouveau;