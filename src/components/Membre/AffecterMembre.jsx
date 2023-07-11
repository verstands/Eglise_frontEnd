import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AffecterMembre = () => {
    const form = useRef();
    const dispatch = useDispatch();
    const [selectCash, setselectCash] = useState("0")
    const departement = useSelector((state) => state.deparmentReduceur)

    const handleChangeRadio = (e) => {
        setselectCash(e.target.value)
        alert(selectCash)
    }
    const handleSave = async (e) => {
        e.preventDefault();
        alert('salut le monde');
    }
    return (
        <>
            <div class="card flex-fill">
                <div class="card-header">
                    <h5 class="card-title mb-0 text-center">Affecter un membre de departement</h5>
                </div>
                <form ref={form} onSubmit={(e) => handleSave(e)}>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Nom mebre</label>
                            <input type="text" class="form-control" /><br />
                        </div>
                        <div className="col-md-6">
                            <label>Departement</label>
                            <select className="form-control">
                                {
                                    Array.isArray(departement) && departement.map((dp) => {
                                        return <option key={dp.id} value={dp.id}>{dp.nom_depart}</option>
                                    })
                                }
                            </select>
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
        </>
    )
}

export default AffecterMembre;