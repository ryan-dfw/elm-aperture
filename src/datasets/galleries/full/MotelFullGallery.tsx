import { useNavigate } from "react-router-dom";
import GalleryFull from "../../../components/GalleryFull.tsx";
import BookingButton from "../../../components/BookingButton.tsx";

const MotelFullGallery = () => {
    const navigate = useNavigate();

    const directory = 'realestate';
    const subDirectory = 'motel_full';
    const numberOfPhotos = 178;

    const sectionHeaders = {
        1: "Exterior",
        50: "Reception",
        64: "Double Queen",
        85: "Single King",
        103: "Double Full",
        134: "ADA Accessible",
        155: "Premium Double Queen",
    };

    return (
        <>
            <div className="gallery-full-page-header">
                <h1>River Valley Inn</h1>
                <p>
                    Exterior approach, reception, five room types, accessibility
                    accommodations, and guest-facing property details.
                </p>
            </div>

            <button
                className="gallery-back-button"
                onClick={() => navigate("/motel")}
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

export default MotelFullGallery;