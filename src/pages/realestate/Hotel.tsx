import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HotelLightBoxWithStyles from "../../datasets/lightboxes/HotelLightBox";
import HotelMap from "../../embeds/maps/HotelMap.tsx";
import GalleryHero from "../../components/GalleryHero.tsx";

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
            <HotelLightBoxWithStyles />
            <div
                className="hero-wrapper"
                onClick={handleNavigateToGallery}
                style={{ cursor: 'pointer' }}
            >
                {isDesktop && (
                    <div className="hero-header clickable-header">
                        <h4>See the Full Story: 300+ Photos Tailored for Your Hotel’s Success.</h4>
                    </div>
                )}
                <GalleryHero name="hotel" number="345" />
                <p className="hero-descriptor">
                    {isDesktop
                        ? "From lobby to linens, every detail captured to enhance your online presence and bookings." +
                        " Reliable, affordable, and designed to help your brand shine."
                        : "See a full delivery - all 300+ photos"}
                </p>
            </div>
            <HotelMap />
        </>
    );
};

export default Hotel;
