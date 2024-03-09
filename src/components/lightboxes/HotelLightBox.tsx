import '../../styles/Lightbox.scss';
import { useContextValue} from "../../contexts/Context.tsx";
import {useCallback, useEffect, useState} from "react";

const HotelLightBox = () => {
    const imagesData = [
        { src: 'res/img/realestate/hotels/hotel_01.webp', title: 'Hotel Bliss', detail: ', Kemah TX' },
        { src: 'res/img/realestate/hotels/hotel_02.webp', title: 'OYO', detail: ', Corpus Christi TX' },
        { src: 'res/img/realestate/hotels/hotel_03.webp', title: 'Hotel Bliss', detail: ', Kemah TX' },
        { src: 'res/img/realestate/hotels/hotel_04.webp', title: 'Stamford Inn', detail: ', Stamford TX' },
        { src: 'res/img/realestate/hotels/hotel_05.webp', title: 'Budget Inn', detail: ', Corpus Christi TX' },
        { src: 'res/img/realestate/hotels/hotel_06.webp', title: 'Hotel Bliss', detail: ', Kemah TX' },
        { src: 'res/img/realestate/hotels/hotel_07.webp', title: 'OYO', detail: ', Midland TX' },
        { src: 'res/img/realestate/hotels/hotel_08.webp', title: 'Plaza Motel', detail: ', Corpus Christi TX' },
        { src: 'res/img/realestate/hotels/hotel_09.webp', title: 'Vali Ho', detail: ', Weslaco TX' },
        { src: 'res/img/realestate/hotels/hotel_10.webp', title: 'OYO', detail: ', Kingsville TX' },
        { src: 'res/img/realestate/hotels/hotel_11.webp', title: 'OYO', detail: ', Kingsville TX' },
        { src: 'res/img/realestate/hotels/hotel_12.webp', title: "America's Best Value Inn", detail: ', Wichita Falls TX' },
        { src: 'res/img/realestate/hotels/hotel_13.webp', title: 'Hometown Inn', detail: ', Texhoma TX' },
        { src: 'res/img/realestate/hotels/hotel_14.webp', title: 'Grand Eagle Ford Lodge', detail: ', Tilden TX' },
        { src: 'res/img/realestate/hotels/hotel_15.webp', title: 'Monterrey Motel', detail: ', Corpus Christi TX' },
        { src: 'res/img/realestate/hotels/hotel_16.webp', title: 'Stamford Inn', detail: ', Stamford TX' },
        { src: 'res/img/realestate/hotels/hotel_17.webp', title: 'Budget Inn', detail: ', Corpus Christi TX' },
        { src: 'res/img/realestate/hotels/hotel_18.webp', title: 'Hometown Inn', detail: ', Lakin, KS' },
    ];
    const { setShouldShowNav } = useContextValue();
    const [currentIndex, setCurrentIndex] = useState(0);

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
                            {image.title}{image.detail}
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

            <button className="carousel-btn prev" onClick={handlePrev} style={{display: 'none'}}>
                &lt;
            </button>
            <button className="carousel-btn next" onClick={handleNext} style={{display: 'none'}}>
                &gt;
            </button>
        </div>
    );
};

export default HotelLightBox;
