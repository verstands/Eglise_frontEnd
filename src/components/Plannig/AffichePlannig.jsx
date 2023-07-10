import React, { useState } from "react";
import { Link } from "react-router-dom";

const AffichePlannig = () => {
    return (
        <>
            <div class="card flex-fill">
                <div className="row">
                    <div className="col-md-4">
                        <label>Date</label>
                        <input type="text" class="form-control" placeholder="Date" /><br />
                    </div>
                    <div className="col-md-4">
                        <label>Activité organisé</label>
                        <input type="text" class="form-control" placeholder="activite" />
                    </div>
                </div>
                <div class="align-self-center w-100">
                    <div class="chart">
                        <div id="datetimepicker-dashboard"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AffichePlannig;