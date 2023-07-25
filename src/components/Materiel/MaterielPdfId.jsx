import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MaterielRapport from '../Tableau/MaterielRapport';
import { addRapportMateriel } from '../../actions/MaterielAction';
import { useNavigate } from 'react-router-dom';

function MaterielPdfId() {
    const form = useRef();
    const mouvements = useSelector((state) => state.materielReducer);
    const [materielRapport, setrapport] = useState([]);
    const dispatch = useDispatch();
    let n = 1;

    const handleRech = (e) => {
        e.preventDefault();
        const du = form.current[0].value !== "" ? form.current[0].value : null;
        const au = form.current[1].value !== "" ? form.current[1].value : null;
        dispatch(addRapportMateriel(du, au))
            .then((data) => {
                setrapport(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/RapportMaterielPdf', { state: { materielRapport } })
    }
    return (
        <div class="card flex-fill">
            <div class="card-header">
                <h1 class="text-center">Rapport materiel</h1>
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
                        <th>Nom</th>
                        <th>Categorie</th>
                        <th>Stock</th>
                        <th>Prix</th>
                        <th>Devise</th>
                        <th>Departement</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(materielRapport) && materielRapport.length === 0 ? (
                        Array.isArray(mouvements) && mouvements.map((data, index) => (
                            <MaterielRapport
                                id={data.id}
                                n={n++}
                                materiel={data.materiel}
                                categorie_id={data.categorie_id}
                                stock={data.stock}
                                cout={data.cout}
                                devide_id={data.devide_id}
                                id_departement={data.id_departement}
                                key={index} />
                        ))
                    ) : (
                        Array.isArray(materielRapport) && materielRapport.map((data, index) => (
                            <MaterielRapport
                                id={data.id}
                                materiel={data.materiel}
                                categorie_id={data.categorie_id}
                                stock={data.stock}
                                cout={data.cout}
                                devide_id={data.devide_id}
                                id_departement={data.id_departement}
                                key={index} />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default MaterielPdfId