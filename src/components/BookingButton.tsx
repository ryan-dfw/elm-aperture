import { Link } from "react-router-dom";

const BookingButton = () => {
    return (
        <Link to="/booking">
            <button className="btn btn-primary">Book Now</button>
        </Link>
    );
};

export default BookingButton;
