import LightBoxFull from "../../../components/GalleryFull.tsx";

const HotelFullGallery = () => {
    const directory = 'realestate';
    const subDirectory = 'hotel_full';
    const numberOfPhotos = 347;

    return <LightBoxFull directory={directory} subDirectory={subDirectory} numberOfPhotos={numberOfPhotos} />;
};

export default HotelFullGallery;