import { Link } from "react-router-dom";
import "../styles/BookingButton.css";

const BookingButton = () => {
    return (
        <Link to="/booking" className="booking-button-link">
            <button className="booking-button">Booking</button>
        </Link>
    );
};

export default BookingButton;