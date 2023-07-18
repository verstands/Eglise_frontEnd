import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMembreId } from "../../actions/membre.action";


const Detailmembre = () => {
    const { id } = useParams();
    const [membreid, setMembreid] = useState(null);

    useEffect(() => {
        getMembreId(id).then((membre) => {
            setMembreid(membre);
        }).catch((error) => {
            console.log(error);
        });
    }, [id]);
    if(!membreid) {
        return <div>Loading...</div>
    }
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Detail d'un membre</strong> </h1>
                        <div class="card">
                           
                            <div class="card-body">
                                <form>
                               
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
                                            <input type="email" value={membreid.sexe} class="form-control" /><br />
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
                                            <input type="text" value={membreid.datenaissance} class="form-control" placeholder="Date de naissance" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Etat civil</label>
                                            <input type="text" value={membreid.etatcivil} class="form-control"  />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Dapartement</label>
                                            <input type="text" value={membreid.activite} class="form-control"  />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Profession</label>
                                            <input type="text" value={membreid.profession} class="form-control"  />
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

export default Detailmembre;