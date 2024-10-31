import { useNavigate } from 'react-router-dom'; // Import useNavigate
import HotelLightBoxWithStyles from "../../datasets/lightboxes/HotelLightBox";
import HotelMap from "../../embeds/maps/HotelMap.tsx";
import PhotosRow from "../../components/PhotosRow.tsx";

const Hotel = () => {
    const navigate = useNavigate();
    const handlePhotosRowClick = () => {
        navigate('/hotel-full');
    };

    return (
        <>
            <HotelLightBoxWithStyles/>
            <div className={"portfolio-section-header"}>
                <div className={"horizontal-line"}></div>
                <h4>See a Full Sample Delivery</h4>
                <div className={"horizontal-line"}></div>
            </div>
            <div
                onClick={handlePhotosRowClick}
                style={{cursor: 'pointer',}}
            >
                <PhotosRow/>
            </div>
            <HotelMap/>
        </>
    );
};

export default Hotel;
