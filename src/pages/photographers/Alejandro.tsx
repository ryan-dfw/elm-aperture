import BeholdWidget from "@behold/react";
import AlejandroProfile from "../../content/profiles/AlejandroProfile.tsx";
import { useContextValue } from "../../contexts/Context.tsx";
import {useEffect} from "react";
import AlejandroCalendar from "../../content/calendars/AlejandroCalendar.tsx";

const Alejandro = () => {
    const { setPhotographer } = useContextValue();
    useEffect(() => {
        setPhotographer('Alejandro');
    }, [setPhotographer]);

    return (
        <>
            <AlejandroProfile/>
            <div className={"portfolio-section-header"}>
                <div className={"horizontal-line"}></div>
                <h4>FEATURED SHOTS ON INSTAGRAM</h4>
                <div className={"horizontal-line"}></div>
            </div>

            <div className="behold-container">
                <BeholdWidget feedId="mdRZb8imZd5bJhCJUgKk"/>
            </div>

            <div className={"portfolio-section-header"}>
                <div className={"horizontal-line"}></div>
                <h4>AVAILABILITY </h4>
                <div className={"horizontal-line"}></div>
            </div>
            <div style={{margin: '50px'}}></div>
            <div className='calendar-container'>
                <AlejandroCalendar/>
            </div>
        </>
    )
}

export default Alejandro;