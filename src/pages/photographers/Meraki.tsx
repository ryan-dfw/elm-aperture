import BeholdWidget from "@behold/react";
import MerakiProfile from "../../components/profiles/MerakiProfile.tsx";
import {useContextValue} from "../../contexts/Context.tsx";
import {useEffect} from "react";

const Meraki = () => {
    const { setPhotographer } = useContextValue();
    useEffect(() => {
        setPhotographer('Meraki');
    }, [setPhotographer]);

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