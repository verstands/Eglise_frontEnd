import React, { useRef } from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";
import { useDispatch, useSelector } from "react-redux";
import { addNouveau } from "../../actions/Nouveau.action";


const AddNouveau = () => {
    const dispatch = useDispatch()
    const categorie = useSelector((state) => state.categorieReducer)
    const culte = useSelector((state) => state.culteReducer)
    const form = useRef()
    
    const handleSave = async (e) => {
        e.preventDefault();
        const data = {
            nom : form.current[0].value,
            adresse : form.current[1].value,
            telephone : form.current[2].value,
            culte : form.current[3].value,
            egliseprovenance : form.current[4].value,
            categorie : form.current[5].value,
        }
        dispatch(addNouveau(data))
        form.current.reset();
    }
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
                                <form ref={form} onSubmit={handleSave}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label>Nom</label>
                                        <input type="text" class="form-control" placeholder="Nom" /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Adresse</label>
                                        <input type="text" class="form-control" placeholder="Adresse" />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Telephone</label>
                                        <input type="number" class="form-control" placeholder="Telephone" />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Categorie</label>
                                        <select className="form-control" >
                                            {
                                                Array.isArray(categorie) && categorie.map((cat) => {
                                                    return <option value={cat.id} key={cat.id}>{cat.nom_categorie}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label>Eglise provenance</label>
                                        <input type="text" class="form-control"  /><br />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Culte</label>
                                        <select className="form-control" name="" id="">
                                            {
                                                Array.isArray(culte) && culte.map((clt) => {
                                                    return <option value={clt.id} key={clt.id}>{clt.nom_culte}</option>
                                                })
                                            }
                                        </select>
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
export default AddNouveau;