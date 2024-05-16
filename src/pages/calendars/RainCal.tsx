import React, { useEffect } from 'react';
import RainCalendar from "../../datasets/calendars/RainCalendar";
import '../../styles/Calendars.css';

const RainCal: React.FC = () => {
    useEffect(() => {
        const disableScroll = (event: WheelEvent | TouchEvent) => {
            event.preventDefault();
        };

        window.addEventListener('wheel', disableScroll, { passive: false });
        window.addEventListener('touchmove', disableScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', disableScroll);
            window.removeEventListener('touchmove', disableScroll);
        };
    }, []);

    return (
        <div className={'calendar-container-full'}>
            <RainCalendar/>
        </div>
    );
};

export default RainCal;
