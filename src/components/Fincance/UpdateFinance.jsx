import React, { useRef, useState } from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";
import { useDispatch, useSelector } from "react-redux";
import { addFinance, getFinance } from "../../actions/FinanceAction";


const UpdateFinance = () => {
    const culte = useSelector((state) => state.culteReducer);
    const devise = useSelector((state) => state.deviseReducer);
    const offrande = useSelector((state) => state.offrandeReducer);
    const form = useRef();
    const dispatch = useDispatch();
    const [effectif, setEffectif] = useState(0);

    const handleSave = (e) => {
        e.preventDefault();
        const data = {
            nfiche: form.current[0].value,
            culte_id: form.current[1].value,
            typeoffrance: form.current[2].value,
            montant: form.current[3].value,
            devise_id: form.current[4].value,
            homme: form.current[5].value,
            femme: form.current[6].value,
            enfant: form.current[7].value,
            effectif: effectif,
        }
        dispatch(addFinance(data));
        dispatch(getFinance())
    }
    const handleEffectif = () => {
        const homme = parseInt(form.current[5].value, 10); // on convertit les chaînes de caractères en nombres
        const femme = parseInt(form.current[6].value, 10);
        const enfant = parseInt(form.current[7].value, 10);
        const total = homme + femme + enfant;
        setEffectif(total); // on met à jour la variable d'état effectif
    };

    const randomNum = Math.floor(Math.random() * 1000000);
    const randomCode = `CODE-${randomNum}`;
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

                            <form ref={form} onSubmit={(e) => handleSave(e)}>
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="">N°Fiche</label>
                                                    <input type="text" value={randomCode} class="form-control" /><br />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="">Culte</label>
                                                    <select name="" className="form-control" id="">
                                                        {
                                                            Array.isArray(culte) && culte.map((clt) => {
                                                                return <option value={clt.id} key={clt.id}>{clt.nom_culte}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="Montant">Type d'offrande</label>
                                                    <select name="" className="form-control" id="">
                                                        {
                                                            Array.isArray(offrande) && offrande.map((off) => {
                                                                return <option value={off.id} key={off.id}>{off.nom_typeoff}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="Montant">Montant</label>
                                                    <input type="number" class="form-control" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="Montant">Devise</label>
                                                    <select name="" className="form-control" id="">
                                                        {
                                                            Array.isArray(devise) && devise.map((off) => {
                                                                return <option value={off.id} key={off.id}>{off.devise}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="col-md-12">
                                                <label htmlFor="">Nombre Homme</label>
                                                <input type="number" onChange={handleEffectif} class="form-control" /><br />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="">Nombre de Femme</label>
                                                <input type="number" onChange={handleEffectif} class="form-control" /><br />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="">Nombre Enfant</label>
                                                <input type="number" onChange={handleEffectif} class="form-control" /><br />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="">Effectif</label>
                                                <input type="number"  value={effectif} class="form-control" /><br />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-primary">Enregistrer</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default UpdateFinance;