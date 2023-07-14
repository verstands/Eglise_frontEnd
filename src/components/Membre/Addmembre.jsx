import React, { useRef, useState } from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";
import { useDispatch, useSelector } from "react-redux";
import { addMembre, getMembre } from "../../actions/membre.action";


const Addmembre = () => {
    const form = useRef()
    const dispatch = useDispatch();

    const handleSave = async (e) => {
        e.preventDefault();

        const postData = {
            nom : form.current[0].value,
            postnom : form.current[1].value,
            prenom : form.current[2].value,
            email : form.current[3].value,
            sexe : form.current[4].value,
            telephone : form.current[5].value,
            adresse : form.current[6].value,
            datenaissance : form.current[7].value,
            etatcivil : form.current[8].value,
            profession : form.current[9].value,
            activite : form.current[10].value,
            password : form.current[11].value,
        }
        await dispatch(addMembre(postData));
        dispatch(getMembre())
        form.current.reset();
    }
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong><i className="fa fa-user-circle" style={{fontSize : "30px"}}></i> Ajouter un membre</strong> </h1>
                        <div class="card">

                            <div class="card-body">
                                <form ref={form} onSubmit={(e) => handleSave(e)}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="">Nom</label>
                                            <input type="text" class="form-control"/><br />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Prenom</label>
                                            <input type="text" class="form-control" placeholder="Postnom" />
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" class="form-control" placeholder="Prenom" />
                                        </div>
                                        <div className="col-md-4">
                                            <input type="email" class="form-control" placeholder="email" /><br />
                                        </div>
                                        <div className="col-md-4">
                                            <select class="form-control">
                                                <option value="F">Femme</option>
                                                <option value="H">Homme</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" class="form-control" placeholder="Telephone" />
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" class="form-control" placeholder="Adresse" /><br />
                                        </div>
                                        <div className="col-md-4">
                                            <input type="date" class="form-control" placeholder="Date de naissance" />
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

export default Addmembre;