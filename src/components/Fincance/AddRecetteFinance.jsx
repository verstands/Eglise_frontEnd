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
                                        <label htmlFor="">N°Fiche</label>
                                        <input type="text" class="form-control" value="frsh52MP"  /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Culte</label>
                                        <input type="text" class="form-control"  />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="Montant">Type d'offrande</label>
                                        <input type="number" class="form-control"  />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="Montant">Montant</label>
                                        <input type="number" class="form-control"  />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="Montant">Devise</label>
                                        <input type="number" class="form-control"  />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Nombre Homme</label>
                                        <input type="number" class="form-control"  /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Nombre de Femme</label>
                                        <input type="number" class="form-control"  /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Nombre Enfant</label>
                                        <input type="number" class="form-control" /><br />
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