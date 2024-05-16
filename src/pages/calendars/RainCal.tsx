import React, { useEffect, useState } from 'react';
import RainCalendar from "../../datasets/calendars/RainCalendar";
import '../../styles/Calendars.css';
import { isMobile } from '../../utils/isMobile.ts';

const RainCal: React.FC = () => {
    const [mobile, setMobile] = useState(isMobile());

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
        <>
            <div className={'spacer'} style={{ marginTop: mobile ? '0' : '21px' }}></div>
            <div className={'calendar-container-full'} style={{ height: mobile ? '85vh' : 'auto' }}>
                <RainCalendar fullscreen={true} />
            </div>
        </>
    );
};

export default RainCal;
