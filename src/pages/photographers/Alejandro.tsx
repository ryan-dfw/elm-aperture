import BeholdWidget from "@behold/react";
import AlejandroProfile from "../../datasets/profiles/AlejandroProfile.tsx";
import AlejandroCalendar from "../../datasets/calendars/AlejandroCalendar.tsx";
import { useContextValue } from "../../contexts/Context.tsx";
import {useEffect} from "react";
import BookingButton from "../../components/BookingButton.tsx";

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
            {/*<div className={"portfolio-section-header"}>*/}
            {/*    <div className={"horizontal-line"}></div>*/}
            {/*    <h4>FEATURED VIDEOS ON VIMEO</h4>*/}
            {/*    <div className={"horizontal-line"}></div>*/}
            {/*</div>*/}
            {/*<div style={{margin: '50px'}}></div>*/}
            {/*<div style={{padding: '56.25% 0 0 0', position: 'relative'}}>*/}
            {/*    <iframe className={"vimeo-profile-frame"}*/}
            {/*            src='https://vimeo.com/showcase/11079325/embed'*/}
            {/*            title="Rain Showcase" allowFullScreen*/}
            {/*    ></iframe>*/}
            {/*</div>*/}
            <div className={"portfolio-section-header"}>
                <div className={"horizontal-line"}></div>
                <h4>AVAILABILITY </h4>
                <div className={"horizontal-line"}></div>
            </div>
            <div style={{margin: '50px'}}></div>
            <div className='calendar-container'>
                <AlejandroCalendar fullscreen={false}/>
            </div>
            <div className="booking-button-container">
                <BookingButton/>
            </div>
        </>
    )
}

export default Alejandro;