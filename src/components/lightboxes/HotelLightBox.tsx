import '../../styles/Lightbox.scss';
import { useContextValue } from '../../contexts/Context.tsx';
import { useCallback, useEffect, useState } from 'react';

const HotelLightBox = () => {
    const basePath = 'res/img/realestate/hotels/';
    const { setShouldShowNav } = useContextValue();
    const [currentIndex, setCurrentIndex] = useState(0);

    const titlesAndDetails = [
        ['Hotel Bliss', ', Kemah TX'],
        ['OYO', ', Corpus Christi TX'],
        ['Hotel Bliss', ', Kemah TX'],
        ['Stamford Inn', ', Stamford TX'],
        ['Budget Inn', ', Corpus Christi TX'],
        ['Hotel Bliss', ', Kemah TX'],
        ['OYO', ', Midland TX'],
        ['Plaza Motel', ', Corpus Christi TX'],
        ['Vali Ho', ', Weslaco TX'],
        ['OYO', ', Kingsville TX'],
        ['OYO', ', Kingsville TX'],
        ["America's Best Value Inn", ', Wichita Falls TX'],
        ['Hometown Inn', ', Texhoma TX'],
        ['Grand Eagle Ford Lodge', ', Tilden TX'],
        ['Monterrey Motel', ', Corpus Christi TX'],
        ['Stamford Inn', ', Stamford TX'],
        ['Budget Inn', ', Corpus Christi TX'],
        ['Hometown Inn', ', Lakin, KS']
    ];

    const imagesData = titlesAndDetails.map(([title, detail], index) => ({
        src: `${basePath}hotel_${(index + 1).toString().padStart(2, '0')}.webp`,
        title,
        detail
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
                            {image.title}
                            {image.detail}
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

export default HotelLightBox;
