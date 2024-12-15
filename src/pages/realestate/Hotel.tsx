import { useNavigate } from 'react-router-dom';
import HotelLightBoxWithStyles from "../../datasets/lightboxes/HotelLightBox";
import HotelMap from "../../embeds/maps/HotelMap.tsx";
import GalleryHero from "../../components/GalleryHero.tsx";

const Hotel = () => {
    const navigate = useNavigate();
    const handlePhotosRowClick = () => {
        navigate('/hotel-full');
    };

    return (
        <>
            <HotelLightBoxWithStyles/>
            <div className={"portfolio-section-header"}>
                <div className={"horizontal-line-mini"}></div>
                <h4>See the Full Story: 300+ Photos Tailored for Your Hotel’s Success.</h4>
                <div className={"horizontal-line-mini"}></div>
            </div>
            <div
                onClick={handlePhotosRowClick}
                style={{cursor: 'pointer',}}
            >
                <GalleryHero/>
            </div>
            <HotelMap/>
        </>
    );
};

export default Hotel;
