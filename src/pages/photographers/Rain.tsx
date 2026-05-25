import BeholdWidget from "@behold/react";
import RainProfile from "../../content/profiles/RainProfile.tsx";
import { useContextValue } from "../../contexts/Context.tsx";
import {useEffect} from "react";
import RainCalendar from "../../content/calendars/RainCalendar.tsx";

const Rain = () => {
    const { setPhotographer } = useContextValue();
    useEffect(() => {
        setPhotographer('Rain');
    }, [setPhotographer]);

    return (
        <>
            <RainProfile/>
            <div className={"portfolio-section-header"}>
                <div className={"horizontal-line"}></div>
                <h4>FEATURED SHOTS ON INSTAGRAM</h4>
                <div className={"horizontal-line"}></div>
            </div>
            <div className="behold-container">
                <BeholdWidget feedId="53ACNRUgJYRQEQ2FmFSt"/>
            </div>
            <div className={"portfolio-section-header"}>
                <div className={"horizontal-line"}></div>
                <h4>AVAILABILITY</h4>
                <div className={"horizontal-line"}></div>
            </div>

            <div className='calendar-container'>
                <RainCalendar/>
            </div>
        </>
    )
}

export default Rain;