import React, {useRef} from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDepartementActivite } from "../../actions/Departemant.action";


const Updatemembre = () => {
    const { id } = useParams();
    const form = useRef();
    const departement = useSelector((state) => state.deparmentReduceur);
    const departementActivite = useSelector((state) => state.deparmentActiviteReduceur);
    const dispatch = useDispatch();
    const membreid = useSelector((state) => state.membreReducer[id]);

    const hnadleActivite = (event) => {
        dispatch(getDepartementActivite(event.target.value));
     }
     const handleSave = async (e) => {
         e.preventDefault();
 
         const postData = {
             nom: form.current[0].value,
             postnom: form.current[1].value,
             prenom: form.current[2].value,
             email: form.current[3].value,
             sexe: form.current[4].value,
             telephone: form.current[5].value,
             adresse: form.current[6].value,
             datenaissance: form.current[7].value,
             etatcivil: form.current[8].value,
             profession: form.current[9].value,
             activite: form.current[10].value,
             password: form.current[11].value,
         }
       
         form.current.reset();
     }
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong><i className="fa fa-user-circle" style={{ fontSize: "30px" }}></i> Ajouter un membre</strong> </h1>
                        <div class="card">

                            <div class="card-body">
                                <form ref={form} onSubmit={(e) => handleSave(e)}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="">Nom</label>
                                            <input type="text" value={membreid.nom} class="form-control" /><br />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Postnom</label>
                                            <input type="text" value={membreid.postnom} class="form-control" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Prenom</label>
                                            <input type="text" value={membreid.prenom} class="form-control" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Email</label>
                                            <input type="email" value={membreid.email} class="form-control" /><br />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Sexe</label>
                                            <select class="form-control">
                                                <option value="F">Femme</option>
                                                <option value="H">Homme</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Telephone</label>
                                            <input type="number" value={membreid.telephone} class="form-control" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Adresse</label>
                                            <input type="text" value={membreid.adresse} class="form-control" /><br />
                                        </div>
                                        <div className="col-md-4">
                                        <label htmlFor="">Date de naissance</label>
                                            <input type="date" value={membreid.datenaissance} class="form-control" placeholder="Date de naissance" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Etat civil</label>
                                            <select name="" className="form-control" id=""> 
                                                <option value="celibataire">Celibataire</option>
                                                <option value="marie">Marié(e)</option>
                                                <option value="divorce">Dirvocé(e)</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Dapartement</label>
                                            <select name="" className="form-control" id="" onChange={hnadleActivite} >
                                                <option value={membreid.activite} key={membreid.activite}>sss</option>
                                                {
                                                    Array.isArray(departement) && departement.map((dp) => {
                                                        return(
                                                            <option value={dp.id} key={dp.id}>{dp.nom_depart}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Profetion</label>
                                            <select name="" className="form-control" >
                                                {
                                                    Array.isArray(departementActivite) && departementActivite.map((dp) => {
                                                        return(
                                                            <option value={dp.id} key={dp.id}>{dp.activite}</option>
                                                        )
                                                    })
                                                }
                                            </select><br />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Mot de passe</label>
                                            <input type="password" class="form-control" placeholder="Mot de passe" />
                                        </div>
                                        <div className="col-md-4">
                                            <button className="btn btn-primary btn-lg">Enregistrer</button>
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

export default Updatemembre;