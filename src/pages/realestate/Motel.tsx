import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MotelGalleryWithStyles from "../../datasets/galleries/MotelGallery";
import HotelMap from "../../embeds/maps/HotelMap.tsx";
import GalleryHero from "../../components/GalleryHero.tsx";
import "../../styles/ServiceSections.css"
import BookingButton from "../../components/BookingButton.tsx";

const Motel = () => {
    const navigate = useNavigate();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavigateToGallery = () => {
        navigate('/motel-full');
    };

    return (
        <>
            <MotelGalleryWithStyles />

            <div className="service-bridge">
                <div className="service-section-heading">
                    <div className="horizontal-line" />
                    <h3>Complete Motel Coverage</h3>
                    <div className="horizontal-line" />
                </div>

                <p>
                    We ensure every motel, regardless of location, receives complete and
                    consistent coverage. Every available room type is documented from
                    multiple angles, signage is framed for roadside recognizability, and
                    amenities are captured with dedicated detail shots. Deliveries are
                    organized for straightforward integration into booking platforms, OTA
                    listings, Google, and property websites.
                </p>
            </div>

            <div
                className="hero-wrapper"
                onClick={handleNavigateToGallery}
                style={{ cursor: 'pointer' }}
            >
                {isDesktop && (
                    <div className="hero-header clickable-header">
                        <h4>View a Full Motel Delivery</h4>
                    </div>
                )}
                <GalleryHero name="motel" number="006" />
                <p className="hero-descriptor">
                    {isDesktop
                        ? "Click to inspect 100+ delivered images covering rooms, signage, amenities, " +
                        "bathrooms, exteriors, and property details."
                        : "Tap to view a full motel delivery"}
                </p>
            </div>

            <HotelMap />

            <br/>

            <div className="service-copy">
                <div className="service-section-heading">
                    <div className="horizontal-line" />
                    <h3>Clear, Consistent Representation</h3>
                    <div className="horizontal-line" />
                </div>

                <p>
                    You understand your guests, the questions they commonly have, and the
                    features that matter most to your property. Coverage defaults are informed
                    by years of motel-focused work, but property-specific requests can always
                    be incorporated - whether that means emphasizing roadside visibility,
                    highlighting particular amenities, documenting renovations, or clarifying
                    common guest points of confusion.
                </p>
            </div>

            {!isDesktop && (<><br/><br/><br/></>)}
            <div className="booking-button-container">
                <BookingButton/>
            </div>
        </>
    );
};

export default Motel;
