import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addRapportTypeDepnse } from "../../actions/DepenseAction";
import RapportTypeDepense from "./RapportTypeDepense";

const InventaireFinance = () => {
    const form = useRef();
    const type_depense = useSelector((state) => state.TypeDepenseReducer)
    const [rapportTypeDepensePdf, setRapportTypeDepensePdf] = useState([]);
    const dispatch = useDispatch();
    let n = 1;

    const handleRech = (e) => {
        e.preventDefault();
        const du = form.current[0].value !== "" ? form.current[0].value : null;
        const au = form.current[1].value !== "" ? form.current[1].value : null;
        dispatch(addRapportTypeDepnse(du, au))
            .then((data) => {
                setRapportTypeDepensePdf(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/RapportTypeDepensePdf', { state: { rapportTypeDepensePdf } })
    }
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class="text-center">Rapport depense consultation</h1>
                    <hr />
                </div>
                <form ref={form} onSubmit={(e) => handleRech(e)}>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="">Du</label>
                            <input type="date" defaultValue={null} class="form-control" placeholder="Date debut" /><br />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="">Au</label>
                            <input type="date" defaultValue={null} class="form-control" placeholder="Date fin" />
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success">Recherche</button>
                        </div>
                        <div className="col-md-3">
                            <button
                                onClick={handleSubmit}
                                className="btn btn-success">
                                <i className='fa fa-print'></i>
                            </button>
                        </div>
                    </div>
                </form>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Date</th>
                            <th>Caisse</th>
                            <th>Depense</th>
                            <th>Montant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(rapportTypeDepensePdf) && rapportTypeDepensePdf.length === 0 ? (
                            Array.isArray(type_depense) && type_depense.map((data, index) => (
                                <RapportTypeDepense
                                    n={n++}
                                    date={data.created_at}
                                    id={data.id}
                                    caisse={data.caisse}
                                    depense={data.depense}
                                    montant={data.montant}
                                    devise={data.devise}
                                    beneficiaire={data.beneficiaire}
                                    key={index}
                                    />
                            ))
                        ) : (
                            Array.isArray(rapportTypeDepensePdf) && rapportTypeDepensePdf.map((data, index) => (
                                <RapportTypeDepense
                                    n={n++}
                                    date={data.created_at}
                                    id={data.id}
                                    caisse={data.caisse}
                                    depense={data.depense}
                                    montant={data.montant}
                                    devise={data.devise}
                                    beneficiaire={data.beneficiaire}
                                    key={index}
                                   />
                            ))
                        )}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default InventaireFinance;