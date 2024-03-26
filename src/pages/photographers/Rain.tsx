import BeholdWidget from "@behold/react";
import RainProfile from "../../components/profiles/RainProfile.tsx";

const Rain = () => {
    return (
        <>
            <RainProfile />
            <div className="behold-container">
                <BeholdWidget feedId="53ACNRUgJYRQEQ2FmFSt"/>
            </div>
        </>
    )
}

export default Rain;