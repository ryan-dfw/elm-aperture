import GalleryFull from "../../../components/GalleryFull.tsx";
import {useNavigate} from "react-router-dom";
import BookingButton from "../../../components/BookingButton.tsx";

const HotelFullGallery = () => {
    const navigate = useNavigate();

    const directory = 'realestate';
    const subDirectory = 'hotel_full';
    const numberOfPhotos = 347;

    const sectionHeaders = {
        1: "Exterior",
        13: "Façade",
        21: "Single King Suite",
        43: "Reception",
        59: "Golden Hour Detail",
        62: "Gazebo & Pool",
        86: "Double Queen Suite",
        139: "ADA Accessible Suite",
        246: "Double Full Suite",
        281: "Dining Area",
        308: "Business Amenities",
        344: "Night Exterior"


    };

    return (
        <>
            <div className="gallery-full-page-header">
                <h1>Holiday Inn Express</h1>
                <p>
                    Hospitality coverage designed around comfort, atmosphere, and competitive presentation within market class.
                </p>
            </div>

            <button
                className="gallery-back-button"
                onClick={() => navigate("/hotel")}
            >
                ⟨
            </button>

            <GalleryFull
                directory={directory}
                subDirectory={subDirectory}
                numberOfPhotos={numberOfPhotos}
                sectionHeaders={sectionHeaders}
            />

            <div className="booking-button-container">
                <BookingButton/>
            </div>
        </>
    );
};

export default HotelFullGallery;