import { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction';
import { useMediaQuery } from 'react-responsive';
import '../../styles/Calendars.css';

const RainCalendar = () => {
    const calendarRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust the max width for your definition of mobile

    const api = import.meta.env.VITE_GOOGLE_API_KEY;
    const cal1 = import.meta.env.VITE_GOOGLE_CAL_1;
    const cal2 = import.meta.env.VITE_GOOGLE_CAL_2;

    useEffect(() => {
        const calendarEl = calendarRef.current;
        if (!calendarEl) return;

        const calendar = new Calendar(calendarEl, {
            plugins: [interactionPlugin, dayGridPlugin, googleCalendarPlugin, timeGridPlugin],
            googleCalendarApiKey: api,
            initialView: 'timeGridWeek',
            editable: true,
            selectable: true,
            unselectAuto: false,
            selectMirror: true,
            selectOverlap: false,
            headerToolbar: {
                center: '',
                start: 'title',
                end: 'prev,next'
            },
            titleFormat: { month: 'short', day: 'numeric' },
            height: isMobile ? '79vh' : '91vh',
            slotLabelInterval: '01:00',
            slotDuration: '01:00',
            allDaySlot: false,
            slotLabelFormat: isMobile ? { hour: 'numeric', meridiem: 'narrow' }
                : { hour: 'numeric', meridiem: 'short' },
            dayHeaderFormat: isMobile ? { weekday: 'short', day: 'numeric', omitCommas: true, separator: ' ' }
                : { weekday: 'short', month: 'short', day: 'numeric', omitCommas: false },
            navLinks: true,
            nowIndicator: true,
            firstDay: 1,
            eventColor: '#0f141c',
            eventDisplay: 'background',
            eventContent: function(arg, createElement) {
                if (arg.event.extendedProps.busy) {
                    return { domNodes: [] };
                } else {
                    const timeText = isMobile ? arg.timeText.replace(/:00/g, '') : arg.timeText;
                    return createElement('div', {}, timeText);
                }
            },
            eventSources: [
                {
                    googleCalendarId: cal1,
                },
                {
                    googleCalendarId: cal2,
                }
            ],
            eventClick: function(info) {
                if (info.event.display === 'background') {
                    info.jsEvent.preventDefault();
                }
            },
            selectLongPressDelay: 20
        });

        calendar.render();

        return () => {
            calendar.destroy();
        };
    }, [api, cal1, cal2, isMobile]);

    return (
        <div id='calendar' ref={calendarRef}></div>
    );
};

export default RainCalendar;
