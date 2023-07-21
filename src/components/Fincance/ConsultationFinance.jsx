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

function ConsultationFinance() {
    const form = useRef();
    const finance = useSelector((state) => state.financeReducer);
    const [rapport, setrapport] = useState([]);
    const dispatch = useDispatch();
    let n = 1;

    const handleRech = (e) => {
        e.preventDefault();
        const du = form.current[0].value !== "" ? form.current[0].value : null;
        const au = form.current[1].value !== "" ? form.current[1].value : null;
        dispatch(addRapportConsultationFinance(du, au))
            .then((data) => {
                setrapport(data);
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
                    {Array.isArray(rapport) && rapport.length === 0 ? (
                        Array.isArray(finance) && finance.map((data, index) => (
                            <NouveauRapport
                                    n = {n++}
                                    nom={data.nom}
                                    adresse={data.adresse}
                                    telephone={data.telephone}
                                    id={data.id} culte={data.culte}
                                    egliseprovenance={data.egliseprovenance}
                                    categorie={data.categorie}
                                    key={index} />
                        ))
                    ) : (
                        Array.isArray(finance) && finance.map((data, index) => (
                            <NouveauRapport
                                    nom={data.nom}
                                    n = {n++}
                                    adresse={data.adresse}
                                    telephone={data.telephone}
                                    id={data.id} culte={data.culte}
                                    egliseprovenance={data.egliseprovenance}
                                    categorie={data.categorie}
                                    key={index} />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ConsultationFinance