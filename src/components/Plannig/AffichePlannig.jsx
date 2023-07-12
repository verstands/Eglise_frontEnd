import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Scheduler, WeekView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

const AffichePlannig = () => {
    const appointments = [
        {
            title: 'Réunion',
            startDate: new Date(2022, 6, 14, 10, 0),
            endDate: new Date(2022, 6, 14, 12, 0),
        },
        {
            title: 'Entretien',
            startDate: new Date(2022, 6, 15, 14, 0),
            endDate: new Date(2022, 6, 15, 15, 0),
        },
        // ...
    ];
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
                    <Scheduler data={appointments}>
                        <ViewState
                            defaultCurrentDate={new Date()}
                            defaultCurrentViewName="Week"
                        />
                        <WeekView
                            startDayHour={9}
                            endDayHour={18}
                        />
                        <Appointments />
                    </Scheduler>
                </div>
            </div>
        </>
    )
}

export default AffichePlannig;