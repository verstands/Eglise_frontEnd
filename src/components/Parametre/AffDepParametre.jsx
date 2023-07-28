import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMembreAffecter, getMembreAffecter } from "../../actions/Affecter.action";
import Select from "react-select";
import AffecterTableau from "../Tableau/affecterTableau";
import { addMenuAffecter, getMenuAffecter } from "../../actions/AffecterDep";
import MenuDepTableau from "../Tableau/AffDepTableau";


const AffecterMenuDep = () => {
    const dispatch = useDispatch();
    const [SelectedDepartement, setSelectedDepartement] = useState("");
    const [SelectedMembre, setSelectedMembre] = useState("");
    const departement_data = useSelector((state) => state.deparmentReduceur);
    const membre = useSelector((state) => state.menuDepartementReducer);
    const affectation_data = useSelector((state) => state.affecationMenuReducer);
    let n = 1;
    
    

    const handleSave = async (e) => {
        e.preventDefault();
        const data = {
            id_menu: SelectedMembre,
            id_departement	: SelectedDepartement,
        };
        dispatch(addMenuAffecter(data));
        dispatch(getMenuAffecter());
    }

    const handleChange = (selectedOption) => {
        setSelectedDepartement(selectedOption.value);
    }

    const handleChangeMembre = (selectedOption) => {
        setSelectedMembre(selectedOption.value);
    }
    const handleDepartement = () => {
        const departements = Array.isArray(departement_data) && departement_data.map((vh) => ({
            label: vh.nom_depart,
            value: vh.id,
        }));
        return (
            <Select
                options={departements}
                onChange={handleChange}
            />
        );
    }

    const handleMembre = () => {
        const membres = Array.isArray(membre) && membre.map((vh) => ({
            label: vh.nom_menu,
            value: vh.id,
        }));
        return (
            <Select
                options={membres}
                onChange={handleChangeMembre}
            />
        );
    }
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h1 class="text-center">Affecter un menu dans departement</h1>
                </div>
                <hr />
                <form  onSubmit={(e) => handleSave(e)}>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Nom membre</label>
                            {handleMembre()}
                        </div>
                        <div className="col-md-6">
                            <label>Departement</label>
                            {handleDepartement()}
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="col-md-12">
                            <button className="btn btn-primary">Enegistrer</button>
                        </div>
                    </div>
                </form>
            </div>
            <hr />
            <div>
                <div className="row">
                <div className="col-md-6">
                    &nbsp;&nbsp;<Link to="/AffecterPdf" className="btn btn-success btn-lg "><span ><i className="fa fa-print"></i></span></Link>
                </div>
                <div className="col-md-6">
                
                </div>
                </div>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Menu</th>
                            <th>Dpartement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(affectation_data) && affectation_data
                            .map((dataEnfant, indexEnfant) => (
                                <MenuDepTableau
                                    menu={dataEnfant.id_menu}
                                    n={n++}
                                    id={dataEnfant.id}
                                    departement={dataEnfant.id_departement}
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

export default AffecterMenuDep;