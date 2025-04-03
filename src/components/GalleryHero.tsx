import '../styles/GalleryHero.css';

interface GalleryHeroProps {
    name: string;
    number: string;
}

const GalleryHero = ({ name, number }: GalleryHeroProps) => {
    const heroBkg = `${name}_full_ad.webp`;
    const heroImg = `${name}_full_${number}.webp`;

    return (
        <div className="gallery-hero-container">
            <img
                className="gallery-hero-bkg"
                src={`/res/img/realestate/${name}_full_ad/${heroBkg}`}
                alt="Gallery Background"
            />

            <img
                className="hero-image"
                src={`/res/img/realestate/${name}_full/full/${heroImg}`}
                alt="Hero Highlight"
            />
        </div>
    );
};

export default GalleryHero;
