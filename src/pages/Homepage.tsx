import '../styles/App.css';
import BeholdWidget from "@behold/react";
import BookingButton from "../components/BookingButton.tsx";

const Homepage = () => {
    return (
        <>
            <div className={"portfolio-section-header"}>
                <div className={"horizontal-line"}></div>
                <h4>FEATURED SHOTS ON INSTAGRAM</h4>
                <div className={"horizontal-line"}></div>
            </div>
            <div className="behold-container">
                <BeholdWidget feedId="yh5fXOj29q5dsG731Dtb"/>
            </div>
            <div className="booking-button-container">
                <BookingButton/>
            </div>
        </>
    )
}

export default Homepage;
