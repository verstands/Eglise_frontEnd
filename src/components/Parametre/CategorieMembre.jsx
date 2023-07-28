import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDepartement, getDepartement } from '../../actions/Departemant.action';
import DepartementTableau from '../Tableau/DepartementTableau';
import { Link } from 'react-router-dom';
import { addCategorie, getCategorie } from '../../actions/CategorieAction';
import CategorieTableau from '../Tableau/CategorieMemebre';

function CategorieMembre() {
  const dispatch = useDispatch();
  const mouvement = useSelector((state) => state.categorieReducer);
  const form = useRef();
  const handleSave = (e) => {
    e.preventDefault();
    const data = {
        nom_categorie: form.current[0].value,
    };
    dispatch(addCategorie(data));
    dispatch(getCategorie(data));
  }
  return (
    <>
        <div class="card flex-fill">
                <div class="card-header">
                    <h1 class="text-center">Categorie de Nouveau ne(e)</h1>
                </div>
                <hr />
                <form ref={form}  onSubmit={(e) => handleSave(e)}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="">Nom Categorie</label>
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
                            <th>Nom membre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(mouvement) && mouvement
                            .map((dataEnfant, indexEnfant) => (
                                <CategorieTableau
                                    nom={dataEnfant.nom_categorie}
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

export default CategorieMembre