import React, { useState } from 'react'
import MaterielTableau from '../Tableau/MaterielTableau';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MaterielMateriel = () => {
    const materiel = useSelector((state) => state.materielReducer);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div class="card flex-fill">
            <div class="card-header">
                <h1 class="text-center">Liste des materiels</h1>
            </div>
            <hr />
            <div className="col-md-5">
            <input 
                            type="text" 
                            placeholder="Recherche departement" 
                            className="form-control" 
                            value={searchTerm}
                            onChange={handleSearch}
                        />
            </div>
            <table class="table table-hover my-0">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Categorie</th>
                        <th>Stock</th>
                        <th>Prix</th>
                        <th>Devise</th>
                        <th>Departement</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(materiel) && materiel
                            .filter((data) => {
                                if (typeof data.materiel !== 'string') {
                                    return false; // ignore non-string values
                                }
                                return data.materiel.toLowerCase().includes(searchTerm.toLowerCase())
                              
                            })
                            .map((data, index) => (
                                <MaterielTableau
                                    id={data.id}
                                    materiel={data.materiel}
                                    categorie_id={data.categorie_id}
                                    stock={data.stock}
                                    cout={data.cout}
                                    devide_id={data.devide_id}
                                    id_departement={data.id_departement}
                                    key={index}
                                />
                            ))
                        }
                </tbody>
            </table>
        </div>
    )
}

export default MaterielMateriel