import BeholdWidget from "@behold/react";
import MaivyProfile from "../../components/profiles/MaivyProfile.tsx";
import {useContextValue} from "../../contexts/Context.tsx";
import {useEffect} from "react";
import BookingButton from "../../components/BookingButton.tsx";

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
            <div className="booking-button-container">
                <BookingButton/>
            </div>
        </>
    )
}

export default Maivy;