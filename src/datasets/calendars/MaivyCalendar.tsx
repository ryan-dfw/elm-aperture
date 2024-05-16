import CalendarItem from "../../components/Calendar.tsx";

const MaivyCalendar = ({ fullscreen }: { fullscreen: boolean }) => {

    const calName: string = 'rainCalendar Calendar'
    const calSourceA: string = import.meta.env.VITE_GOOGLE_CAL_3;
    const calSourceB: string = '';


    return (
        <CalendarItem calName={calName} calSourceA={calSourceA} calSourceB={calSourceB} fullscreen={fullscreen}/>
    );
};

export default MaivyCalendar;