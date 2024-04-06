import { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { googleServiceAccountKey } from "../../secrets.ts";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'

const RainCalendar = () => {
    const calendarRef = useRef<HTMLDivElement>(null);
    const api = googleServiceAccountKey.api_key;
    const cal1 = googleServiceAccountKey.cal_1;
    const cal2 = googleServiceAccountKey.cal_2;

    useEffect(() => {
        const calendarEl = calendarRef.current;
        if (!calendarEl) return;

        const calendar = new Calendar(calendarEl, {
            plugins: [ dayGridPlugin, googleCalendarPlugin, bootstrap5Plugin, timeGridPlugin ],
            googleCalendarApiKey: api,
            initialView: 'timeGridWeek',
            themeSystem: 'bootstrap5',
            headerToolbar: {
                center: '',
                start: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay,prev,next'
            },
            allDaySlot: false,
            eventContent: function(arg, createElement) {
                if (arg.event.extendedProps.busy) {
                    return { domNodes: [] };
                } else {
                    return createElement('div', {}, arg.timeText);
                }
            },
            eventSources: [
                {
                    googleCalendarId: cal1
                },
                {
                    googleCalendarId: cal2
                }
            ]
        });

        calendar.render();
    }, [api, cal1, cal2]);

    return (
        <div id='calendar' ref={calendarRef}></div>
    );
};

export default RainCalendar;
