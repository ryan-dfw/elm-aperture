import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HotelGalleryWithStyles from "../../datasets/galleries/HotelGallery";
import HotelMap from "../../embeds/maps/HotelMap.tsx";
import GalleryHero from "../../components/GalleryHero.tsx";
import "../../styles/ServiceSections.css";
import BookingButton from "../../components/BookingButton.tsx";

const Hotel = () => {
    const navigate = useNavigate();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavigateToGallery = () => {
        navigate('/hotel-full');
    };

    return (
        <>
            <HotelGalleryWithStyles />

            <div className="service-bridge">
                <div className="service-section-heading">
                    <div className="horizontal-line" />
                    <h3>Hospitality Presentation</h3>
                    <div className="horizontal-line" />
                </div>

                <p>
                    We understand hotel selection is often made in the details: the warmth of a bedside lamp, the openness of reception, the sense of quiet comfort a guest imagines before booking. Those considerations guide coverage across guest rooms, exteriors, and the amenities that shape the overall stay.
                </p>
            </div>

            <div
                className="hero-wrapper"
                onClick={handleNavigateToGallery}
                style={{ cursor: 'pointer' }}
            >
                {isDesktop && (
                    <div className="hero-header clickable-header">
                        <h4>View a Full Hotel Delivery</h4>
                    </div>
                )}
                <GalleryHero name="hotel" number="345" />
                <p className="hero-descriptor">
                    {isDesktop
                        ? "Click to inspect 300+ delivered images covering rooms, lobbies, amenities, exteriors, and guest-facing spaces."
                        : "Tap to view a full hotel delivery"}
                </p>
            </div>

            <HotelMap />

            <br />

            <div className="service-copy">
                <div className="service-section-heading">
                    <div className="horizontal-line" />
                    <h3>Consistent Across Brands</h3>
                    <div className="horizontal-line" />
                </div>

                <p>
                    You understand your market, your nearby competition, and the parts of the property guests respond to most strongly. Our coverage defaults are informed by years of work with hotels across the South and Midwest, but every property is approached according to its own priorities and clientele. Whether documenting renovated interiors, emphasizing business amenities, or capturing the atmosphere of twilight exteriors, each hotel is best presented through the details that distinguish it within its class.
                </p>
            </div>

            <div className="booking-button-container">
                <BookingButton />
            </div>
        </>
    );
};

export default Hotel;