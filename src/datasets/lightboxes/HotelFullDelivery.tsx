import LightBoxFull from "../../components/LightboxFull.tsx";

const HotelFullDelivery = () => {
    const directory = 'realestate';
    const subDirectory = 'hotel_full';
    const numberOfPhotos = 347;

    return <LightBoxFull directory={directory} subDirectory={subDirectory} numberOfPhotos={numberOfPhotos} />;
};

export default HotelFullDelivery;