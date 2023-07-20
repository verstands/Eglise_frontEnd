import React from 'react'
import { useSelector } from 'react-redux';
import MouvementTableau from '../Tableau/MouvementTableau';
import MouvementRapport from '../Tableau/MouvementRapport';

function RapportMouveament() {
    const mouvements = useSelector((state) => state.mouvementReducer);
    return (
        <div class="card flex-fill">
            <div class="card-header">
                <h1 class="text-center">Rapport mouvement membres</h1>
                <hr />
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="">Du</label>
                    <input type="date" class="form-control" placeholder="Date debut" /><br />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Au</label>
                    <input type="date" class="form-control" placeholder="Date fin" />
                </div>

                <div className="col-md-4">
                    <label htmlFor=""></label>
                    <button className="btn btn-success">Recherche</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-success"><i className='fa fa-print'></i></button>
                </div>
            </div>
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
                    {
                        Array.isArray(mouvements) && mouvements
                            .map((dataEnfant, indexEnfant) => (
                                <MouvementRapport
                                    membre={dataEnfant.membre}
                                    id={dataEnfant.id}
                                    mission={dataEnfant.mission}
                                    created_at={dataEnfant.created_at}
                                    key={indexEnfant}
                                />
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RapportMouveament