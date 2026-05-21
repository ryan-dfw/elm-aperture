import CalendarItem from "../../components/Calendar.tsx";

const AlejandroCalendar = ({ fullscreen }: { fullscreen: boolean }) => {

    const calName: string = 'alejandroCalendar Calendar'
    const calSourceA: string = import.meta.env.VITE_GOOGLE_CAL_5;
    const calSourceB: string = import.meta.env.VITE_GOOGLE_CAL_6;


    return (
        <CalendarItem calName={calName} calSources={[calSourceA, calSourceB]} fullscreen={fullscreen}/>
    );
};

export default AlejandroCalendar;