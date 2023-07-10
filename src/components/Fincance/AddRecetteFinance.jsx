import React from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";


const AddRecetteFinance = () => {
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Recette</strong> </h1>
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Ajouter Recette</h5>
                            </div>

                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Date" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Culte" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class="form-control" placeholder="Type offrande" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" class="form-control" placeholder="Montant USD" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" class="form-control" placeholder="Montatnt CDF" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" class="form-control" placeholder="Nombre homme" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" class="form-control" placeholder="Nombre femme" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" class="form-control" placeholder="Nombre enfant" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="email" class="form-control" placeholder="Effectif" /><br />
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
export default AddRecetteFinance;