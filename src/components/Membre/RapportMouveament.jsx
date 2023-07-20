import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MouvementTableau from '../Tableau/MouvementTableau';
import MouvementRapport from '../Tableau/MouvementRapport';
import { Link } from 'react-router-dom';
import { addRapportMembreMouvement } from '../../actions/Mouvement.action';

function RapportMouveament() {
    const form = useRef();
    const mouvements = useSelector((state) => state.mouvementReducer);
    const [rapport, setrapport] = useState([]);
    const dispatch = useDispatch();

    const handleRech = (e) => {
        e.preventDefault();
        const du = form.current[0].value !== "" ? form.current[0].value : null;
        const au = form.current[1].value !== "" ? form.current[1].value : null;
        const type = form.current[2].value !== "" ? form.current[2].value : null;

        dispatch(addRapportMembreMouvement(du, au, type))
            .then((data) => {
                setrapport(data.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }
    return (
        <div class="card flex-fill">
            <div class="card-header">
                <h1 class="text-center">Rapport mouvement membres</h1>
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
                    <div className="col-md-3">
                        <label htmlFor="">Type mouvement</label>
                        <input type="text" defaultValue={null} class="form-control" placeholder="Date fin" />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-success">Recherche</button>
                    </div>
                    <div className="col-md-3">
                        <Link className="btn btn-success"><i className='fa fa-print'></i></Link>
                    </div>
                </div>
            </form>
            <table class="table table-hover my-0">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Type de mouvement</th>
                        <th>Date mouveamnt</th>
                        <th>Nom memebre</th>
                    </tr>
                </thead>
                <tbody>
                    {rapport.length === 0 ? (
                        Array.isArray(mouvements) && mouvements.map((dataEnfant, indexEnfant) => (
                            <MouvementRapport
                                membre={dataEnfant.membre}
                                id={dataEnfant.id}
                                mission={dataEnfant.mission}
                                created_at={dataEnfant.created_at}
                                key={indexEnfant}
                            />
                        ))
                    ) : (
                        Array.isArray(rapport) && rapport.map((dataEnfant, indexEnfant) => (
                            <MouvementRapport
                                membre={dataEnfant.membre}
                                id={dataEnfant.id}
                                mission={dataEnfant.mission}
                                created_at={dataEnfant.created_at}
                                key={indexEnfant}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default RapportMouveament