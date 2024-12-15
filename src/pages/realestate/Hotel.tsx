import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HotelLightBoxWithStyles from "../../datasets/lightboxes/HotelLightBox";
import HotelMap from "../../embeds/maps/HotelMap.tsx";
import GalleryHero from "../../components/GalleryHero.tsx";

const Hotel = () => {
    const navigate = useNavigate();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    // Update `isDesktop` on window resize
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
            {isDesktop && (
                <div
                    className="portfolio-section-header clickable-header"
                    onClick={handleNavigateToGallery}
                >
                    <div className="horizontal-line-mini"></div>
                    <h4>See the Full Story: 300+ Photos Tailored for Your Hotel’s Success.</h4>
                    <div className="horizontal-line-mini"></div>
                </div>
            )}

            <div
                className="hero-wrapper"
                onClick={handleNavigateToGallery}
                style={{ cursor: 'pointer' }}
            >
                <GalleryHero />
                <p className="hero-descriptor">
                    {isDesktop
                        ? "From lobby to linens, every detail captured to enhance your online presence and bookings. Reliable, affordable, and designed to help your brand shine."
                        : "See a full delivery - all 300+ photos"}
                </p>
            </div>

            <HotelMap/>
        </>
    );
};

export default Hotel;
