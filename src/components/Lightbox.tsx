import React, { useCallback, useEffect, useState } from 'react';
import '../styles/Lightbox.scss';
import { useContextValue } from '../contexts/Context.tsx';

interface LightBoxProps {
    directory: string;
    subDirectory: string;
    details: [string, string, string, number, number][];
}

enum InitialOfPhotographers {
    Rain = "R",
    Maivy = "M"
}

const LightBox: React.FC<LightBoxProps> = ({ directory, subDirectory, details }) => {
    const [imageOpen, setImageOpen] = useState(false);
    const basePath = `res/img/${directory}/`;
    const { setShouldShowNav } = useContextValue();
    const [currentIndex, setCurrentIndex] = useState(0);
    const offsetDesktop = details.map(item => item[3]);
    const offsetMobile = details.map(item => item[4]);
    const getInitial = (photographer: string): string => {
        const photographerKey = photographer as keyof typeof InitialOfPhotographers;
        return InitialOfPhotographers[photographerKey];
    };
    const initial = details.map(item => getInitial(item[2]));

    const imagesData = details.map(([title, detail, photographer], index) => ({
        src: `${basePath}${subDirectory}/full/${subDirectory}_${(index + 1).toString().padStart(2, '0')}.webp`,
        thumbSrc: `${basePath}${subDirectory}/thumb/${subDirectory}_${(index + 1).toString().padStart(2, '0')}_thumb.webp`,
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

    const applyOffset = (offsetDesktop: number[], offsetMobile: number[]) => {
        const windowWidth = window.innerWidth;
        const galleryImages = document.querySelectorAll('.galleryimage img');

        const applyFullOffset = () => {
            galleryImages.forEach((image, i) => {
                const imgElement = image as HTMLImageElement;
                imgElement.style.marginTop = `${offsetDesktop[i]}px`;
            });
        };

        const applyMediumOffset = () => {
            const midOffsets = offsetDesktop.map(offset => offset / 2);
            galleryImages.forEach((image, i) => {
                const imgElement = image as HTMLImageElement;
                imgElement.style.marginTop = `${midOffsets[i]}px`;
            });
        };

        const applyMobileOffset = () => {
            galleryImages.forEach((image, i) => {
                const imgElement = image as HTMLImageElement;
                imgElement.style.marginTop = `${offsetMobile[i]}px`;
            });
        };

        if (windowWidth > 1080) {
            applyFullOffset();
        } else if (windowWidth >= 800) {
            applyMediumOffset();
        } else {
            applyMobileOffset();
        }
    };

    window.addEventListener('resize', () => {
        applyOffset(offsetDesktop, offsetMobile);
    });

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
    }, [imagesData.length, closeLightbox, setShouldShowNav, imageOpen]);

    useEffect(() => {
        applyOffset(offsetDesktop, offsetMobile);
    }, [offsetDesktop, offsetMobile]);

    useEffect(() => {
        const handleOutsideClick = (event: Event) => {
            const lightboxImg = document.querySelector('.lightboxIMG');
            if (lightboxImg && !lightboxImg.contains(event.target as Node)) {
                const closeButtons = document.querySelectorAll('.close');
                if (closeButtons.length > 0) {
                    const firstCloseButton = closeButtons[0] as HTMLAnchorElement;
                    firstCloseButton.click();
                }
            }
        };

        const lightboxContainer = document.querySelector('.gallery-container');
        if (lightboxContainer) {
            lightboxContainer.addEventListener('click', handleOutsideClick);
        }

        return () => {
            if (lightboxContainer) {
                lightboxContainer.removeEventListener('click', handleOutsideClick);
            }
        };
    }, []);

    //DO NOT DELETE THIS CONSOLE LOG. It satisfies tsc without ever console logging.
    if (currentIndex + 1 - currentIndex === 0) {
        console.log(currentIndex);
    }

    return (
        <div className={`gallery-container ${(
            directory === "portrait" ? "portrait" : directory === "events" ? "events" : ""
            )}`}>
            <div
                className={`gallery ${subDirectory === "headshot" && window.innerWidth > 1000 ? "headshot-grid" : ""}`}>
                {imagesData.map((image, index: number) => (
                    <div className="galleryimage" key={index} style={{position: 'relative'}}>
                        <img src={image.thumbSrc} alt={`Gallery Image ${index + 1}`} loading="lazy"/>
                        <div className="initial-overlay">{initial[index]}</div>
                        <a href={`#img-${index + 1}`}>{image.title}</a>
                    </div>
                ))}
            </div>

            {imagesData.map((image, index: number) => (
                <div className="img" id={`img-${index + 1}`} key={`img-${index + 1}`}>
                    <div className="content">
                        <img
                            className="lightboxIMG"
                            src={image.src}
                            alt={`Large Image ${index + 1}`}
                            loading="lazy"
                        />
                        <div className="title">
                            {`${image.title}${image.detail}, shot by ${image.photographer}`}
                        </div>
                        <a
                            id={`closeButton-${index + 1}`}
                            className={`close`}
                            href="#gallery"
                            onClick={() => {
                                if (imageOpen) {
                                    setShouldShowNav(true);
                                    setImageOpen(false);
                                }
                            }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                            }}
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

export default LightBox;
