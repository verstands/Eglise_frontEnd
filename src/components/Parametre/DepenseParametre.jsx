import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CulteTableau from '../Tableau/CulteTableau';
import { addDepense, getDepense } from '../../actions/DepenseAction';

function DepenseParametre() {
  const dispatch = useDispatch();
  const mouvement = useSelector((state) => state.depenseReducer);
  const form = useRef();
  const handleSave = (e) => {
    e.preventDefault();
    const data = {
        depense: form.current[0].value,
    };
    dispatch(addDepense(data));
    dispatch(getDepense(data));
  }
  return (
    <>
        <div class="card flex-fill">
                <div class="card-header">
                    <h1 class="text-center">Les types depense</h1>
                </div>
                <hr />
                <form ref={form}  onSubmit={(e) => handleSave(e)}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="">Type depense</label>
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
                            <th>Type depense</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(mouvement) && mouvement
                            .map((dataEnfant, indexEnfant) => (
                                <CulteTableau
                                    nom={dataEnfant.depense}
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

export default DepenseParametre