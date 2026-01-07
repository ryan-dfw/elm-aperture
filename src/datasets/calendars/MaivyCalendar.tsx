import CalendarItem from "../../components/Calendar.tsx";

const MaivyCalendar = ({ fullscreen }: { fullscreen: boolean }) => {

    const calName: string = 'rainCalendar Calendar'
    const calSourceA: string = import.meta.env.VITE_GOOGLE_CAL_3;
    const calSourceB: string = import.meta.env.VITE_GOOGLE_CAL_4;


    return (
        <CalendarItem calName={calName} calSources={[calSourceA, calSourceB]} fullscreen={fullscreen}/>
    );
};

export default MaivyCalendar;