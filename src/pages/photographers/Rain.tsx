import BeholdWidget from "@behold/react";
import RainProfile from "../../components/profiles/RainProfile.tsx";
import '../../styles/PhotographerPage.css'

const Rain = () => {
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
                <h4>FEATURED VIDEOS ON VIMEO</h4>
                <div className={"horizontal-line"}></div>
            </div>
            <div style={{margin: '50px'}}></div>
            <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                <iframe className={"vimeo-profile-frame"}
                        src='https://vimeo.com/showcase/11079325/embed'
                        title="Rain Showcase" allowFullScreen
                ></iframe>
            </div>
        </>
    )
}

export default Rain;