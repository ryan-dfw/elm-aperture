import BeholdWidget from "@behold/react";
import MerakiProfile from "../../components/profiles/MerakiProfile.tsx";

const Meraki = () => {
    return (
        <>
            <MerakiProfile />
            <div className="behold-container">
                <BeholdWidget feedId="syNVYHnSVDdzLimybtdc"/>
            </div>
        </>
    )
}

export default Meraki;