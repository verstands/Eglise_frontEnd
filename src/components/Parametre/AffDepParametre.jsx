import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMembreAffecter, getMembreAffecter } from "../../actions/Affecter.action";
import Select from "react-select";
import AffecterTableau from "../Tableau/affecterTableau";


const AffecterMembre = () => {
    const dispatch = useDispatch();
    const [selectCash, setselectCash] = useState("0");
    const [SelectedDepartement, setSelectedDepartement] = useState("");
    const [SelectedMembre, setSelectedMembre] = useState("");
    const departement_data = useSelector((state) => state.deparmentReduceur);
    const membre = useSelector((state) => state.menuReducer);
    const affectation_data = useSelector((state) => state.affecationReducer);

    const handleChangeRadio = async (e) => {
        setselectCash(e.target.value);
    }
    const handleSave = async (e) => {
        e.preventDefault();
        const data = {
            nom_membre: SelectedMembre,
            departement_id: SelectedDepartement,
            state: selectCash
        };
        dispatch(getMembreAffecter());
        dispatch(addMembreAffecter(data));
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
            label: vh.nom + " " + vh.prenom,
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
                    <h1 class="text-center">Affecter un membre de departement</h1>
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
                        <div className="col-md-4">
                            <input name="v" type="radio" onChange={handleChangeRadio} checked={selectCash === "1"} value="1" placeholder="Departement" />Cochet tout
                            <input name="v" type="radio" onChange={handleChangeRadio} checked={selectCash === "0"} value="0" placeholder="Departement" />Decochet tout
                        </div>
                        <br />
                        <div className="col-md-12">
                            <button className="btn btn-primary">Valider</button>
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
                            <th>Mmebre</th>
                            <th>Dpartement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(affectation_data) && affectation_data
                            .map((dataEnfant, indexEnfant) => (
                                <AffecterTableau
                                    membre={dataEnfant.nom_membre}
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

export default AffecterMembre;