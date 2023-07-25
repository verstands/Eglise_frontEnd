import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../NavBar';
import NavOt from '../NavOt';
import Checkbox from '@mui/material/Checkbox';
import { addCommunication, getCommunication } from '../../actions/CommunicationAction';
function AddCommunication() {
    const form = useRef();
    const dispatch = useDispatch();
   const [selectedRows, setSelectedRows] = useState([]);
   const departement = useSelector((state) => state.deparmentReduceur)

    const DataSelect = (event, id) => {
        if (event.target.checked) {
           setSelectedRows([...selectedRows, id]);
        } else {
           setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        }
     };
    const handleSave = (e) => {
        e.preventDefault();
        selectedRows.forEach((rowId) => {
           const data = {
                Departement : rowId,
                obejet : form.current[0].value,
                piece : 1,
                text : form.current[2].value,
                type_message : form.current[3].value,
           } 
           dispatch(addCommunication(data))
           dispatch(getCommunication())
        });
        form.current.reset();
    }
    return (
        <div class="card flex-fill">
            <div class="card-header">
                <h1 class=" text-center">Liste des communication</h1>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-3">

                </div>
            </div>
            <div className='row'>
                <div className="col-md-4">
                    <table class="table table-hover my-0">
                        <thead>
                            <tr>
                                <th>Departemenr</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(departement) && departement.map((drp) => {
                                    return (
                                        <tr>
                                            <td>{drp.nom_depart}</td>
                                            <td>
                                                <Checkbox
                                                    checked={selectedRows.includes(drp.id)}
                                                    onChange={(event) => DataSelect(event, drp.id)}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-8">
                     <form ref={form} onSubmit={(e) => handleSave(e)}>
                         <div className="row">
                             <div className="col-md-12">
                                 <label htmlFor="">Obejet</label>
                                 <input type="text" className="form-control" />
                             </div>
                             <div className="col-md-12">
                                 <label htmlFor="">Piece jointe</label>
                                 <input type="file" className="form-control" />
                             </div>
                             <div className="col-md-12">
                                 <label htmlFor="">Text</label>
                                 <textarea name="" className="form-control" id="" cols="30" rows="5"></textarea>
                             </div>
                             <div className="col-md-12">
                                 <label htmlFor="">Type de message</label>
                                <select name="" className='form-control' id="">
                                    <option value="SMS">Sms</option>
                                    <option value="EMAIL">Email</option>
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
        </div>
    )
}

export default AddCommunication