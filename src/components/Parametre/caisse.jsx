import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CaisseTableau from '../Tableau/CaisseTableau';
import { addCaisse, getCaisse } from '../../actions/CaisseAction';

function Caisse() {
  const dispatch = useDispatch();
  const caisse = useSelector((state) => state.caisseReducer);
  const devise = useSelector((state) => state.deviseReducer);
  const form = useRef();
  const handleSave = (e) => {
    e.preventDefault();
    const data = {
        nom_caisse: form.current[0].value,
        montant: form.current[1].value,
        devise_id: form.current[2].value
    };
    dispatch(addCaisse(data));
    dispatch(getCaisse(data));
  }
  return (
    <>
        <div class="card flex-fill">
                <div class="card-header">
                    <h1 class="text-center">Caisse</h1>
                </div>
                <hr />
                <form ref={form}  onSubmit={(e) => handleSave(e)}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="">Nom caisse</label>
                            <input name="caise" className='form-control' type="text"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">Montant</label>
                            <input name="caise" className='form-control' type="number"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">Devise</label>
                           <select className='form-control' name="" id="">
                                {
                                   Array.isArray(devise) && devise.map((de) => {
                                        return(
                                            <option key={de.id} value={de.id}>{de.devise}</option>
                                        )
                                    })
                                }
                           </select>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="col-md-12">
                            <button className="btn btn-primary">Enregistrer</button>
                        </div>
                    </div>
                </form>
            </div>
            <hr />
            <div>
                <div className="col-md-6">
                    &nbsp;&nbsp;<Link to="/AffecterPdf" className="btn btn-success btn-lg "><span ><i className="fa fa-print"></i></span></Link>
                </div>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>Nom Caisse</th>
                            <th>Montant</th>
                            <th>Devise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(caisse) && caisse
                            .map((dataEnfant, indexEnfant) => (
                                <CaisseTableau
                                    caisse={dataEnfant.nom_caisse}
                                    devise={dataEnfant.devise}
                                    montant={dataEnfant.montant}
                                    id={dataEnfant.id}
                                    departement={dataEnfant.departement_id}
                                    key={indexEnfant}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
    </>
  )
}

export default Caisse