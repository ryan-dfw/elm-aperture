import MerakiProfile from "../../datasets/profiles/MerakiProfile.tsx";
import {useContextValue} from "../../contexts/Context.tsx";
import {useEffect} from "react";
import BookingButton from "../../components/BookingButton.tsx";

const Meraki = () => {
    const { setPhotographer } = useContextValue();
    useEffect(() => {
        setPhotographer('Meraki');
    }, [setPhotographer]);

    return (
        <>
            <MerakiProfile/>
            <div className="booking-button-container">
                <BookingButton/>
            </div>
            <div className="empty-photographer-spacer" style={{height: '40vh'}}></div>
        </>

    )
}

export default Meraki;