import { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const RainCalendar = () => {
    const calendarRef = useRef<HTMLDivElement>(null);
    const api = import.meta.env.VITE_GOOGLE_API_KEY;
    const cal1 = import.meta.env.VITE_GOOGLE_CAL_1;
    const cal2 = import.meta.env.VITE_GOOGLE_CAL_2;

    useEffect(() => {
        const calendarEl = calendarRef.current;
        if (!calendarEl) return;

        const calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, googleCalendarPlugin, bootstrap5Plugin, timeGridPlugin],
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

        // Cleanup function
        return () => {
            calendar.destroy();
        };
    }, [api, cal1, cal2]);

    return (
        <div id='calendar' ref={calendarRef}></div>
    );
};

export default RainCalendar;
