import React, {useEffect, useRef, useState} from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction';
import { useContextValue } from '../contexts/Context.tsx';
import '../styles/Calendars.css/';
import {isMobile} from "../utils/isMobile.ts";

interface CalendarProps {
    calName: string;
    calSourceA: string;
    calSourceB: string;
    fullscreen: boolean;
}

const CalendarItem: React.FC<CalendarProps> = (
    {calName, calSourceA, calSourceB, fullscreen}
    ) => {
    const calendarRef = useRef<HTMLDivElement>(null);
    const [mobile, setMobile] = useState(isMobile());

    const { setSelectedDateTime } = useContextValue();

    const api = import.meta.env.VITE_GOOGLE_API_KEY;
    const cal1 = calSourceA;
    let cal2 = ''
    calSourceB ? cal2 = calSourceB : cal2 = '';

    useEffect(() => {
        const handleResize = () => {
            setMobile(isMobile());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            height: (mobile && fullscreen) ? '700px' : '686px',
            slotLabelInterval: '01:00',
            slotDuration: '01:00',
            allDaySlot: false,
            slotLabelFormat: mobile ? { hour: 'numeric', meridiem: 'narrow' }
                : { hour: 'numeric', meridiem: 'short' },
            dayHeaderFormat: mobile ? { weekday: 'short', day: 'numeric', omitCommas: true, separator: ' ' }
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
                    const timeText = mobile
                        ? arg.timeText.replace(/:00/g, '')
                        : arg.timeText;
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
            selectLongPressDelay: 20,
            select: function(info) {
                const selectedDate = info.start.toISOString().split('T')[0];
                const selectedStart = info.start.toLocaleTimeString([],
                    { hour: '2-digit', minute: '2-digit' });
                const selectedEnd = info.end.toLocaleTimeString([],
                    { hour: '2-digit', minute: '2-digit' });
                setSelectedDateTime({ date: selectedDate, start: selectedStart, end: selectedEnd });
            }
        });

        calendar.render();

        return () => {
            calendar.destroy();
        };
    }, [api, cal1, cal2, fullscreen, mobile, setSelectedDateTime]);

    return (
        <div id={calName} ref={calendarRef}>
        </div>
    );
};

export default CalendarItem;
