import CalendarItem from "../Calendar.tsx";

const ScottCalendar = () => {

    const calName: string = 'scottCalendar Calendar'

    //todo - update these once u get them. lipsumming w/ my cals for rn
    const calSourceA: string = import.meta.env.VITE_GOOGLE_CAL_1;
    const calSourceB: string = import.meta.env.VITE_GOOGLE_CAL_2;


    return (
        <CalendarItem calName={calName} calSourceA={calSourceA} calSourceB={calSourceB}/>
    );
};

export default ScottCalendar;