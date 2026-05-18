import React, { useCallback, useEffect, useState } from 'react';
import '../styles/GalleryFull.scss';
import { useContextValue } from '../contexts/Context.tsx';

interface GalleryProps {
    directory: string;
    subDirectory: string;
    numberOfPhotos: number;
    sectionHeaders?: Record<number, string>;
}

const GalleryFull: React.FC<GalleryProps> = ({ directory, subDirectory, numberOfPhotos, sectionHeaders = {} }) => {
    const [imageOpen, setImageOpen] = useState(false);
    const basePath = `res/img/${directory}/`;
    const { setShouldShowNav } = useContextValue();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showOrdinals, setShowOrdinals] = useState(false);

    const imagesData = Array.from({ length: numberOfPhotos }, (_, index) => ({
        src: `${basePath}${subDirectory}/full/${subDirectory}_${(index + 1).toString().padStart(3, '0')}.webp`,
        thumbSrc: `${basePath}${subDirectory}/thumb/${subDirectory}_${(index + 1).toString().padStart(3, '0')}_thumb.webp`,
    }));

    const closeGallery = useCallback(() => {
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
                setTimeout(() => {
                    setImageOpen(true);
                }, 500);
                setShouldShowNav(false);
            });
        });

        const closeButton = document.getElementById('closeButton');

        if (closeButton) {
            closeButton.addEventListener('click', closeGallery);
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
                closeButton.removeEventListener('click', closeGallery);
            }
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [imagesData.length, closeGallery, setShouldShowNav, imageOpen]);

    useEffect(() => {
        const handleOutsideClick = (event: Event) => {
            const galleryImg = document.querySelector('.galleryIMG');
            if (galleryImg && !galleryImg.contains(event.target as Node)) {
                const closeButtons = document.querySelectorAll('.close');
                if (closeButtons.length > 0) {
                    const firstCloseButton = closeButtons[0] as HTMLAnchorElement;
                    firstCloseButton.click();
                }
            }
        };

        const galleryContainer = document.querySelector('.gallery-container');
        if (galleryContainer) {
            galleryContainer.addEventListener('click', handleOutsideClick);
        }

        return () => {
            if (galleryContainer) {
                galleryContainer.removeEventListener('click', handleOutsideClick);
            }
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "#") {
                setShowOrdinals((current) => !current);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    //DO NOT DELETE THIS CONSOLE LOG. It satisfies tsc without ever console logging.
    if (currentIndex + 1 - currentIndex === 0) {
        console.log(currentIndex);
    }

    return (
        <div
            className={`gallery-container ${
                directory === "portrait" ? "portrait" : directory === "events" ? "events" : ""
            }`}
        >
            <div className="gallery-full">
                {imagesData.map((image, index: number) => {
                    const imageNumber = index + 1;
                    const sectionHeader = sectionHeaders[imageNumber];

                    return (
                        <React.Fragment key={imageNumber}>
                            {sectionHeader && (
                                <div className="gallery-full-section-header">
                                    {sectionHeader}
                                </div>
                            )}

                            <div className="galleryimage" style={{ position: "relative" }}>
                                <img
                                    src={image.thumbSrc}
                                    alt={`Gallery Image ${imageNumber}`}
                                    loading="lazy"
                                />
                                <a href={`#img-${imageNumber}`}></a>

                                {showOrdinals && (
                                    <div className="ordinal-overlay">
                                        {imageNumber}
                                    </div>
                                )}
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>

            {imagesData.map((image, index: number) => (
                <div className="img" id={`img-${index + 1}`} key={`img-${index + 1}`}>
                    <div className="content">
                        <img
                            className="galleryIMG"
                            src={image.src}
                            alt={`Large Image ${index + 1}`}
                            loading="lazy"
                        />
                        <a
                            id={`closeButton-${index + 1}`}
                            className="close"
                            href="#gallery"
                            onClick={() => {
                                if (imageOpen) {
                                    setShouldShowNav(true);
                                    setImageOpen(false);
                                }
                            }}
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                            }}
                        ></a>
                    </div>
                </div>
            ))}

            <button className="carousel-btn prev" onClick={handlePrev} style={{ display: "none" }}>
                &lt;
            </button>
            <button className="carousel-btn next" onClick={handleNext} style={{ display: "none" }}>
                &gt;
            </button>
        </div>
    )};

export default GalleryFull;