import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMateriel, getMateriel } from '../../actions/MaterielAction';

const AddMateriel = () => {
    const form = useRef();
    const devise = useSelector((state) => state.deviseReducer);
    const departement = useSelector((state) => state.deparmentReduceur);
    const dispatch = useDispatch();

    const handleSave = async (e) => {
        e.preventDefault();
        const data = {
            'materiel' : form.current[0].value,
            'categorie_id' : form.current[1].value,
            'stock' : form.current[2].value,
            'cout' : form.current[3].value,
            'devide_id' : form.current[4].value,
            'id_departement' : form.current[5].value,
        };

       await  dispatch(addMateriel(data));
       dispatch(getMateriel());
       form.current.reset();
    };
    return (
        <div class="card flex-fill">
            <div class="card-header">
                <h1 class=" text-center">Ajouter un materiel</h1>
            </div>
            <hr />
            <div className="row">

                <form ref={form} onSubmit={(e) => handleSave(e)}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="">Materiel</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">Categorie</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">Nombre</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">Prix</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">Devise</label>
                            <select name="" className="form-control" id="">
                                {
                                    Array.isArray(devise) && devise.map((ds) => {
                                        return <option value={ds.id} key={ds.id}>{ds.devise}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">Departement</label>
                            <select name="" className="form-control" id="">
                                {
                                    Array.isArray(departement) && departement.map((ds) => {
                                        return <option value={ds.id} key={ds.id}>{ds.nom_depart	}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-md-12">
                            <br />
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default AddMateriel