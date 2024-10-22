import BeholdWidget from "@behold/react";
import MaivyProfile from "../../datasets/profiles/MaivyProfile.tsx";
import {useContextValue} from "../../contexts/Context.tsx";
import {useEffect} from "react";
import BookingButton from "../../components/BookingButton.tsx";
// import MaivyCalendar from "../../datasets/calendars/MaivyCalendar.tsx";

const Maivy = () => {
    const { setPhotographer } = useContextValue();
    useEffect(() => {
        setPhotographer('Maivy');
    }, [setPhotographer]);

    return (
        <>
            <MaivyProfile/>
            <div className="behold-container">
                <BeholdWidget feedId="3nRMGu6Vz93x9lA2lw9q"/>
            </div>
            {/*<div className={"portfolio-section-header"}>*/}
            {/*    <div className={"horizontal-line"}></div>*/}
            {/*    <h4>AVAILABILITY </h4>*/}
            {/*    <div className={"horizontal-line"}></div>*/}
            {/*</div>*/}
            {/*<div style={{margin: '50px'}}></div>*/}
            {/*<div className='calendar-container'>*/}
            {/*    <MaivyCalendar fullscreen={false}/>*/}
            {/*</div>*/}
            <div className="booking-button-container">
                <BookingButton/>
            </div>
        </>
    )
}

export default Maivy;