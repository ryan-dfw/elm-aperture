import '../styles/GalleryHero.css';

const GalleryHero = () => {
    const heroBkg = "hotel_full_ad.webp";
    const heroImg = "hotel_full_345.webp";

    return (
        <div className="gallery-hero-container">
            <img
                className="gallery-hero-bkg"
                src={`/res/img/realestate/hotel_full_ad/${heroBkg}`}
                alt="Gallery Background"
            />

            <img
                className="hero-image"
                src={`/res/img/realestate/hotel_full/full/${heroImg}`}
                alt="Hero Highlight"
            />
        </div>
    );
};

export default GalleryHero;
