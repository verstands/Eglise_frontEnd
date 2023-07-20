import React, { useRef, useState, useEffect } from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMouvementId } from "../../actions/Affecter.action";

const UpdateMouvement = () => {
    const form = useRef();
    const { id } = useParams();
    const dispatch = useDispatch();
    const [membreid, setMembreid] = useState(null);

    useEffect(() => {
        getMouvementId(id).then((membre) => {
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
        <div>
            <div class="wrapper">
                <NavBar />
                <div class="main">
                    <NavOt />
                    <main className="content">
                        <div className="container-fluid p-0">
                            <h1 className="h3 mb-3"><strong>Modifier un mouvement</strong> </h1>
                            <div class="card">
                                <div class="card-body">
                                    <form ref={form} onSubmit={handleSave}>

                                        <div className="row">
                                            <div className="col-md-4">
                                                <label htmlFor="">Membre</label>
                                                <input type="text" value={membreid.membre} class="form-control" /><br />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="Nom">mission</label>
                                                <label htmlFor="Date"></label>
                                                <input type="text" value={membreid.mission} class="form-control" placeholder="Date de naissance" />
                                            </div>
                                            <div className="col-md-12">
                                                <button className="btn btn-primary">Modiferi</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default UpdateMouvement;