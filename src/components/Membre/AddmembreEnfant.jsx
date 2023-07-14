import React, { useRef } from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";
import { useDispatch, useSelector } from "react-redux";


const AddMembreEnfant = () => {
    const form = useRef();
    const dispatch = useDispatch();
    const handleSave = (e) => {
        e.preventDefault();
        alert('salut lemone');
    }
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
                                <form ref={form} onSubmit={handleSave}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="">Nom</label>
                                            <input type="text" class="form-control" /><br />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="Nom">Date</label>
                                            <label htmlFor="Date"></label>
                                            <input type="date" class="form-control" placeholder="Date de naissance" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="Nom">Sexe</label>
                                            <select name="" id="" className="form-control">
                                                <option value="H">Homme</option>
                                                <option value="F">Femme</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="Nom">Nom de Fammille</label>

                                            <input type="email" class="form-control" placeholder="Famille" /><br />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-primary">Enregistrer</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default AddMembreEnfant;