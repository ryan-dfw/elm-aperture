import BeholdWidget from "@behold/react";
import RainProfile from "../../components/profiles/RainProfile.tsx";

const Rain = () => {
    return (
        <>
            <RainProfile/>
            <div className="behold-container">
                <BeholdWidget feedId="53ACNRUgJYRQEQ2FmFSt"/>
            </div>
            <div style={{margin: '50px'}}></div>
            <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                <iframe src='https://vimeo.com/showcase/11079325/embed' title="Rain Showcase" allowFullScreen
                        frameBorder='0'
                        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '15px'}}></iframe>
            </div>
        </>
    )
}

export default Rain;