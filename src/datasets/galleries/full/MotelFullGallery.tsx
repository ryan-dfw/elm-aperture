import LightBoxFull from "../../../components/GalleryFull.tsx";

const MotelFullGallery = () => {
    const directory = 'realestate';
    const subDirectory = 'motel_full';
    const numberOfPhotos = 178;

    return <LightBoxFull directory={directory} subDirectory={subDirectory} numberOfPhotos={numberOfPhotos} />;
};

export default MotelFullGallery;