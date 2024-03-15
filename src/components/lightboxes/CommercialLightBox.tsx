import '../../styles/Lightbox.scss';
import { useContextValue } from '../../contexts/Context.tsx';
import { useCallback, useEffect, useState } from 'react';

const CommercialLightBox = () => {
    const basePath = 'res/img/realestate/';
    const subDirectory = 'commercial';
    const { setShouldShowNav } = useContextValue();
    const [currentIndex, setCurrentIndex] = useState(0);

    const details = [
        ['The Mayfair', ', 3400 Welborn', 'Rain'],
        ['Bleu Ciel', ', 3130 N Harwood', 'Rain'],
        ['Highland Gates', ', 4602 Abbott', 'Rain'],
        ['588 Lofts', ', 3110 Thomas', 'Rain'],
        ['The Parks on Travis', ', 3901 Travis', 'Rain'],
        ['HALL Arts', ', 1747 Leonard', 'Rain'],
        ['Norcross Office', ' Interior', 'Rain'],
        ['Norcross Office', ' Interior', 'Rain'],
        ['Bryan Place V', ', 3105 San Jacinto', 'Rain'],
        ['The Sorrento', ', 8616 Turtle Creek', 'Rain'],
        ['New Construction', ', 1848 Euclid', 'Rain'],
        ["The W", ', 2340 Victory', 'Rain'],
        ['La Tour Condominiums', ', 3030 McKinney', 'Rain'],
        ['New Construction', ', 3909 Hawthorne', 'Rain'],
        ['Twenty One', ', 3883 Turtle Creek', 'Rain'],
        ['The Stoneleigh', ', 2300 Wolf', 'Rain'],
        ['Azure', ', 2900 McKinney', 'Rain'],
        ['Bleu Ciel', ', 3130 N Harwood', 'Rain']
    ];

    const imagesData = details.map(([title, detail, photographer], index) => ({
        src: `${basePath}${subDirectory}/${subDirectory}_${(index + 1).toString().padStart(2, '0')}.webp`,
        title,
        detail,
        photographer
    }));


    const closeLightbox = useCallback(() => {
        setShouldShowNav(true);
    }, [setShouldShowNav]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const galleryImages = document.querySelectorAll('.galleryimage');

        galleryImages.forEach((image) => {
            image.addEventListener('click', () => {
                setShouldShowNav(false);
            });
        });

        const closeButton = document.getElementById('closeButton');

        if (closeButton) {
            closeButton.addEventListener('click', closeLightbox);
        }
        const handleKeyPress = (event: KeyboardEvent) => {
            const closeButtons = document.querySelectorAll('.close');

            if (event.key === 'Escape' && closeButtons.length > 0) {
                const firstCloseButton = closeButtons[0] as HTMLAnchorElement;
                firstCloseButton.click();
            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                const currentHash = window.location.hash;
                const currentIndex = parseInt(currentHash.substring(5), 10);

                if (!isNaN(currentIndex)) {
                    let newIndex;

                    if (event.key === 'ArrowLeft') {
                        newIndex = Math.max(1, currentIndex - 1);
                    } else {
                        newIndex = Math.min(imagesData.length, currentIndex + 1);
                    }

                    window.location.hash = `#img-${newIndex}`;
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            galleryImages.forEach((image) => {
                image.removeEventListener('click', () => {
                    setShouldShowNav(false);
                });
            });

            if (closeButton) {
                closeButton.removeEventListener('click', closeLightbox);
            }
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [imagesData.length, closeLightbox, setShouldShowNav]);

    if (currentIndex + 1 - currentIndex === 0) {
        console.log(currentIndex);
    }

    return (
        <div className="gallery-container">
            <div className="gallery">
                {imagesData.map((image, index) => (
                    <div className="galleryimage" key={index}>
                        <img src={image.src} alt={`Gallery Image ${index + 1}`} loading="lazy" />
                        <a href={`#img-${index + 1}`}>{image.title}</a>
                    </div>
                ))}
            </div>

            {imagesData.map((image, index) => (
                <div className="img" id={`img-${index + 1}`} key={`img-${index + 1}`}>
                    <div className="content">
                        <img
                            src={image.src.replace('600/600', '1920/1080')}
                            alt={`Large Image ${index + 1}`}
                            loading="lazy"
                        />
                        <div className="title">
                            {`${image.title}${image.detail}, shot by ${image.photographer}`}
                        </div>
                        <a
                            id={`closeButton-${index + 1}`}
                            className="close"
                            href="#gallery"
                            onClick={() => setShouldShowNav(true)}
                        ></a>
                    </div>
                </div>
            ))}

            <button className="carousel-btn prev" onClick={handlePrev} style={{ display: 'none' }}>
                &lt;
            </button>
            <button className="carousel-btn next" onClick={handleNext} style={{ display: 'none' }}>
                &gt;
            </button>
        </div>
    );
};

export default CommercialLightBox;
