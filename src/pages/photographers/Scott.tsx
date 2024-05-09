import BeholdWidget from "@behold/react";
import '../../styles/PhotographerPage.css';
import ScottProfile from "../../components/profiles/ScottProfile.tsx"
import ScottCalendar from "../../components/calendars/ScottCalendar.tsx";
import {useContextValue} from "../../contexts/Context.tsx";
import {useEffect} from "react";

const Scott = () => {
    const { setPhotographer } = useContextValue();
    useEffect(() => {
        setPhotographer('Scott');
    }, [setPhotographer]);

    return (
        <>
            <ScottProfile />
            <div className={"portfolio-section-header"}>
                <div className={"horizontal-line"}></div>
                <h4>FEATURED SHOTS ON INSTAGRAM</h4>
                <div className={"horizontal-line"}></div>
            </div>
            <div className="behold-container">
                <BeholdWidget feedId=""/>
            </div>
            <div className={"portfolio-section-header"}>
                <div className={"horizontal-line"}></div>
                <h4>AVAILABILITY </h4>
                <div className={"horizontal-line"}></div>
            </div>
            <div style={{margin: '50px'}}></div>
            <div className='calendar-container'>
                <ScottCalendar />
            </div>
        </>
    )
}

export default Scott;