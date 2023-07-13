import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


const AffichePlannig = () => {
    const [calendarEvents, setCalendarEvents] = useState([
        { title: 'Evenement 1', start: '2023-07-15T10:30:00', end: '2023-07-15T12:30:00' },
        { title: 'Evenement 2', start: '2023-07-20T14:00:00', end: '2023-07-20T16:00:00' }
    ]);

    const handleEventClick = (info) => {
        alert(`Event clicked: ${info.event.title}`);
    };

    const handleDateSelect = (selectInfo) => {
        let title = prompt('Enter a title for your event');
        let calendarApi = selectInfo.view.calendar;

        if (title) {
            calendarApi.addEvent({
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            });
        }
    };

    return (
        <>
            <div class="card flex-fill">
                <div class="align-self-center w-100">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        initialView="dayGridMonth"
                        events={calendarEvents}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        eventClick={handleEventClick}
                        select={handleDateSelect}
                    />
                </div>
            </div>
        </>
    )
}

export default AffichePlannig;