import React, { useRef } from "react";
import NavBar from "../NavBar";
import NavOt from "../NavOt";
import { useDispatch, useSelector } from "react-redux";
import { addTypeDepense } from "../../actions/TypeDepenseAction";


const DepenseFinance = () => {
    const caisse = useSelector((state) => state.caisseReducer);
    const depense = useSelector((state) => state.depenseReducer);
    const devise = useSelector((state) => state.deviseReducer);
    const dispatch = useDispatch();
    const form = useRef();

    const handleSave = (e) => {
        e.preventDefault()
        const data = {
            'ciasse_id' : form.current[0].value, 
            'depense_id' : form.current[1].value, 
            'montant' : form.current[2].value, 
            'devise_id' : form.current[3].value, 
            'beneficiaire' : form.current[4].value, 
            'pournous' : 1, 
        }

        dispatch(addTypeDepense(data))
    }
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <NavOt />
                <main className="content">
                    <div className="container-fluid p-0">
                        <h1 className="h3 mb-3"><strong>Depense</strong> </h1>
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Ajouter Depense</h5>
                            </div>
                            <form action="" ref={form} onSubmit={(e) => handleSave(e)}>
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="">Caisse Utilisé</label>
                                        <select name="" className="form-control" id="">
                                            {
                                                Array.isArray(caisse) && caisse.map((cs) => {
                                                    return <option value={cs.id} key={cs.id}>{cs.nom_caisse}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Type depense</label>
                                        <select name="" className="form-control" id="">
                                        {
                                            Array.isArray(depense) && depense.map((cs) => {
                                                return <option value={cs.id} key={cs.id}>{cs.depense}</option>
                                            })
                                        }
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Montant</label>
                                        <input type="number" class="form-control" placeholder="" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Devise</label>
                                        <select name="" className="form-control" id="">
                                            {
                                                Array.isArray(devise) && devise.map((cs) => {
                                                    return <option value={cs.id} key={cs.id}>{cs.devise}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Beneficiaire</label>
                                        <textarea name="" id="" className="form-control" cols="40" rows="5"></textarea><br />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="checkbox" placeholder="Nombre homme" />Pour nous
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
export default DepenseFinance;