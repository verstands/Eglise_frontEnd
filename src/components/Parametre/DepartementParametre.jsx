import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDepartement, getDepartement } from '../../actions/Departemant.action';
import DepartementTableau from '../Tableau/DepartementTableau';
import { Link } from 'react-router-dom';

function DepartementParametre() {
    const dispatch = useDispatch();
  const deprtament = useSelector((state) => state.deparmentReduceur);
  const form = useRef();
  const handleSave = (e) => {
    e.preventDefault();
    const data = {
        nom_depart: form.current[0].value,
    };
    dispatch(addDepartement(data));
    dispatch(getDepartement(data));
  }
  return (
    <>
        <div class="card flex-fill">
                <div class="card-header">
                    <h1 class="text-center">Departement</h1>
                </div>
                <hr />
                <form ref={form}  onSubmit={(e) => handleSave(e)}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="">Nom departement</label>
                            <input name="caise" className='form-control' type="text"/>
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
                            <th>Nom Departement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(deprtament) && deprtament
                            .map((dataEnfant, indexEnfant) => (
                                <DepartementTableau
                                    nom_departement={dataEnfant.nom_depart}
                                    id={dataEnfant.id}
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

export default DepartementParametre