import CalendarItem from "../../components/Calendar.tsx";

const RainCalendar = ({ fullscreen }: { fullscreen: boolean }) => {
    const calName: string = 'rainCalendar Calendar';
    const calSourceA: string = import.meta.env.VITE_GOOGLE_CAL_1;
    const calSourceB: string = import.meta.env.VITE_GOOGLE_CAL_2;

    return (
        <CalendarItem calName={calName} calSourceA={calSourceA} calSourceB={calSourceB} fullscreen={fullscreen} />
    );
};

export default RainCalendar;
