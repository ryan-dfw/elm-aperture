import BeholdWidget from "@behold/react";
import MaivyProfile from "../../components/profiles/MaivyProfile.tsx";

const Maivy = () => {
    return (
        <>
            <MaivyProfile />
            <div className="behold-container">
                <BeholdWidget feedId="3nRMGu6Vz93x9lA2lw9q"/>
            </div>
        </>
    )
}

export default Maivy;