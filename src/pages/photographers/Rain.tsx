import BeholdWidget from "@behold/react";
import RainProfile from "../../datasets/profiles/RainProfile.tsx";
import RainCalendar from "../../datasets/calendars/RainCalendar.tsx";
import { useContextValue } from "../../contexts/Context.tsx";
import {useEffect} from "react";
import BookingButton from "../../components/BookingButton.tsx";

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
                <h4>AVAILABILITY </h4>
                <div className={"horizontal-line"}></div>
            </div>
            <div style={{margin: '50px'}}></div>
            <div className='calendar-container'>
                <RainCalendar fullscreen={false}/>
            </div>
            <div className="booking-button-container">
                <BookingButton/>
            </div>
        </>
    )
}

export default Rain;