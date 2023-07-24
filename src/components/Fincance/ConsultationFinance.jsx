import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MouvementTableau from '../Tableau/MouvementTableau';
import MouvementRapport from '../Tableau/MouvementRapport';
import { Link } from 'react-router-dom';
import { addRapportMembreMouvement } from '../../actions/Mouvement.action';
import NouveauneTableau from '../Tableau/NouveauneTableau';
import NouveauRapport from '../Tableau/NouveauRapport';
import { addRapportNouveau } from '../../actions/Nouveau.action';
import { useNavigate } from 'react-router-dom';
import { addRapportConsultationFinance } from '../../actions/FinanceAction';
import ConsultationTableau from '../Tableau/ConsultationTableau';

function ConsultationFinance() {
    const form = useRef();
    const finance = useSelector((state) => state.financeReducer);
    const [consultation, setconsultation] = useState([]);
    const dispatch = useDispatch();
    let n = 1;

    const handleRech = (e) => {
        e.preventDefault();
        const du = form.current[0].value !== "" ? form.current[0].value : null;
        const au = form.current[1].value !== "" ? form.current[1].value : null;
        dispatch(addRapportConsultationFinance(du, au))
            .then((data) => {
                setconsultation(data);
                alert(consultation);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/ConsultationFinancePdf', { state: { consultation } })
    }
    return (
        <div class="card flex-fill">
            <div class="card-header">
                <h1 class="text-center">Consultation</h1>
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
                    <div className="col-md-2">
                        <select name="" className="form-control" id="">
                            <option value="">Rapport Recette</option>
                            <option value="">Rapport Global</option>
                            <option value="">La Caisse</option>
                        </select>
                    </div>
                </div>
            </form>
            <table class="table table-hover my-0">
                <thead>
                    <tr>
                        <th>Type offrande</th>
                        <th>Culte</th>
                        <th>Montant</th>
                        <th>Devise</th>
                        <th>Nombre homme</th>
                        <th>Nombre Femme</th>
                        <th>Nombre Enfant</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(consultation) && consultation.length === 0 ? (
                        Array.isArray(finance) && finance.map((data, index) => (
                            <ConsultationTableau
                                nfiche={data.nfiche}
                                created_at={data.created_at}
                                culte_id={data.culte_id}
                                montant={data.montant}
                                typeoffrance_id={data.typeoffrande}
                                devise={data.devise}
                                homme={data.homme}
                                femme={data.femme}
                                enfant={data.enfant}
                                effectif={data.effectif}
                                key={index} />
                        ))
                    ) : (
                        Array.isArray(consultation) && consultation.map((data, index) => (
                            <ConsultationTableau
                                nfiche={data.nfiche}
                                created_at={data.created_at}
                                culte_id={data.culte_id}
                                montant={data.montant}
                                typeoffrance_id={data.typeoffrande}
                                devise={data.devise}
                                homme={data.homme}
                                femme={data.femme}
                                enfant={data.enfant}
                                effectif={data.effectif}
                                key={index} />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ConsultationFinance