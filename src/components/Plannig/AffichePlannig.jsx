import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useDispatch, useSelector } from "react-redux";
import frLocale from '@fullcalendar/core/locales/fr';
import '@fullcalendar/core/locales/fr';
import { addPlanning, deletePlanning, getplanning, updatePlanning } from "../../actions/PlanningAction";


const AffichePlannig = () => {
    const [calendarEvents, setCalendarEvents] = useState([
        { title: 'Evenement 1', start: '2023-07-15T10:30:00', end: '2023-07-15T12:30:00' },
        { title: 'Evenement 2', start: '2023-07-20T14:00:00', end: '2023-07-20T16:00:00' }
    ]);
    const [data, setdata] = useState([]);
    const plannig = useSelector((state) => state.PlannigReducer);
    const dispatch = useDispatch();


    const handleEventClick = (info) => {
        alert(`Evenement: ${info.event.title}`);
    };

    const handleDateSelect = async (selectInfo) => {
        let title = prompt('Entrer l\'événement');
        let calendarApi = selectInfo.view.calendar;

        if (title) {
            let start = selectInfo.startStr;
            let end = prompt('Entrer la date de fin (ex : 2023-07-20T16:00:00)');

            const eventData = {
                title: title,
                start: start,
                end: end,
                allDay: selectInfo.allDay
            };

            calendarApi.addEvent(eventData);
            dispatch(addPlanning(eventData));
            dispatch(getplanning());
        }
    };

    const handleEventDelete = (info) => {
        let calendarApi = info.view.calendar;
        dispatch(deletePlanning(info.event.id));
        calendarApi.getEventById(info.event.id).remove();
    };

    const handleEventDrop = (eventDropInfo) => {
        const { event, oldEvent } = eventDropInfo;
        dispatch(updatePlanning({
            id: event.id,
            start: event.start,
            end: event.end,
        }));
    };

    const handleEventResize = (eventResizeInfo) => {
        const { event } = eventResizeInfo;
        dispatch(updatePlanning({
          id: event.id,
          start: event.start,
          end: event.end,
        }));
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
                        events={plannig}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        eventClick={handleEventDelete}
                        select={handleDateSelect}
                        eventDelete={handleEventDelete}
                        eventColor="#378006"
                        eventTextColor="white"
                        eventBorderColor="black"
                        locale={frLocale}
                        ventDrop={handleEventDrop} // <--- Ajouter cette ligne
                        eventResize={handleEventResize}
                    />
                </div>
            </div>
        </>
    )
}

export default AffichePlannig;