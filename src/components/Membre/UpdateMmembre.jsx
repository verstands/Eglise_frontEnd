import React, { useRef, useState, useEffect } from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";
import { useDispatch, useSelector } from "react-redux";
import { getMembreEnfant, getMembreEnfantId } from "../../actions/Enfant.action";
import { useParams } from "react-router-dom";

const UpdateMmembre = () => {
    const form = useRef();
    const { id } = useParams();
    const dispatch = useDispatch();
    const [membreid, setMembreid] = useState(null);

    useEffect(() => {
        getMembreEnfantId(id).then((membre) => {
            setMembreid(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, [id]);
    const handleSave = (e) => {
        e.preventDefault();  
    }

    if (!membreid) {
        return <div>Loading...</div>
    }
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Modifier un membre enfant</strong> </h1>
                        <div class="card">
                            
                            <div class="card-body">
                                <form ref={form} onSubmit={handleSave}>
                                   
                                           <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="">Nom</label>
                                            <input type="text" value={membreid.nom}  class="form-control" /><br />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="Nom">Date de naissance</label>
                                            <label htmlFor="Date"></label>
                                            <input type="text" value={membreid.datenaisse}  class="form-control" placeholder="Date de naissance" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="Nom">Sexe</label>
                                            <select name="" id="" className="form-control">
                                                <option value="M">Homme</option>
                                                <option value="F">Femme</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="Nom">Nom de Fammille</label>
                                            <input value={membreid.famille} type="email" class="form-control" placeholder="Famille" /><br />
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
    );
};

export default UpdateMmembre;