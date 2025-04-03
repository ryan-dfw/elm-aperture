import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MotelLightBoxWithStyles from "../../datasets/lightboxes/MotelLightBox";
import HotelMap from "../../embeds/maps/HotelMap.tsx";
// import GalleryHero from "../../components/GalleryHero.tsx";

const Motel = () => {
    const navigate = useNavigate();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // const handleNavigateToGallery = () => {
    //     navigate('/hotel-full');
    // };

    // delete me once the gallery div is up; this just satisfies tsc in the meantime
    console.log(navigate, isDesktop)

    return (
        <>
            <MotelLightBoxWithStyles />



            {/*<div*/}
            {/*    className="hero-wrapper"*/}
            {/*    onClick={handleNavigateToGallery}*/}
            {/*    style={{ cursor: 'pointer' }}*/}
            {/*>*/}
            {/*    {isDesktop && (*/}
            {/*        <div className="hero-header clickable-header">*/}
            {/*            <h4>See the Full Story: 100+ Photos Tailored for Your Motel’s Success.</h4>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*    <GalleryHero />*/}
            {/*    <p className="hero-descriptor">*/}
            {/*        {isDesktop*/}
            {/*            ? "From lobby to linens, every detail captured to enhance your online presence and bookings." +*/}
            {/*            " Reliable, affordable, and designed to help your brand shine."*/}
            {/*            : "See a full delivery - all 300+ photos"}*/}
            {/*    </p>*/}
            {/*</div>*/}

            <HotelMap />
        </>
    );
};

export default Motel;
