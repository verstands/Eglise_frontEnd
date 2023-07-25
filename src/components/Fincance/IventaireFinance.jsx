import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addRapportTypeDepnse } from "../../actions/DepenseAction";

const InventaireFinance = () => {
    const form = useRef();
    const mouvements = useSelector((state) => state.nouveauneReducer);
    const [rapport, setrapport] = useState([]);
    const dispatch = useDispatch();
    let n = 1;

    const handleRech = (e) => {
        e.preventDefault();
        const du = form.current[0].value !== "" ? form.current[0].value : null;
        const au = form.current[1].value !== "" ? form.current[1].value : null;
        dispatch(addRapportTypeDepnse(du, au))
            .then((data) => {
                setrapport(data);
                alert(JSON.stringify(rapport)); 
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/RapportNouveauPdf', {state : {rapport}})
    }
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class="text-center">Rapport nouveau ne(e)</h1>
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
                            <th>Devise</th>
                            <th>Beneficiaire</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Project Apollo</td>
                            <td class="d-none d-xl-table-cell">01/01/2021</td>
                            <td class="d-none d-xl-table-cell">31/06/2021</td>
                            <td>Done</td>
                            <td>Done</td>
                            <td>Done</td>
                            <td>Done</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default InventaireFinance;