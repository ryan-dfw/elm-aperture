import React, { useEffect, useState } from 'react';
import '../styles/casestudy/GalleryFull.scss';
import { useContextValue } from '../contexts/Context.tsx';

interface GalleryProps {
    directory: string;
    subDirectory: string;
    numberOfPhotos: number;
    sectionHeaders?: Record<number, string>;
}

const GalleryFull: React.FC<GalleryProps> = ({ directory, subDirectory, numberOfPhotos, sectionHeaders = {} }) => {
    const basePath = `res/img/${directory}/`;
    const { setShouldShowNav } = useContextValue();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [showOrdinals, setShowOrdinals] = useState(false);
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

    const imagesData = Array.from({ length: numberOfPhotos }, (_, index) => ({
        src: `${basePath}${subDirectory}/full/${subDirectory}_${(index + 1).toString().padStart(3, '0')}.webp`,
        thumbSrc: `${basePath}${subDirectory}/thumb/${subDirectory}_${(index + 1).toString().padStart(3, '0')}_thumb.webp`,
    }));

    const closeViewer = () => {
        setShouldShowNav(true);
        setSelectedIndex(null);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === '#') {
                setShowOrdinals((current) => !current);
                return;
            }

            if (selectedIndex === null) return;

            if (event.key === 'Escape') {
                closeViewer();
            } else if (event.key === 'ArrowLeft') {
                setSelectedIndex(selectedIndex === 0 ? imagesData.length - 1 : selectedIndex - 1);
            } else if (event.key === 'ArrowRight') {
                setSelectedIndex(selectedIndex === imagesData.length - 1 ? 0 : selectedIndex + 1);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, imagesData.length]);

    return (
        <div
            className={`gallery-container ${
                directory === 'portrait' ? 'portrait' : directory === 'events' ? 'events' : ''
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

                            <div
                                className={`galleryimage ${loadedImages[index] ? 'loaded' : ''}`}
                                style={{ position: 'relative' }}
                                onClick={() => {
                                    setSelectedIndex(index);
                                    setShouldShowNav(false);
                                }}
                            >
                                <img
                                    className={loadedImages[index] ? 'loaded' : ''}
                                    src={image.thumbSrc}
                                    alt={`Gallery Image ${imageNumber}`}
                                    loading="lazy"
                                    draggable={false}
                                    onDragStart={(e) => e.preventDefault()}
                                    onLoad={() => {
                                        setLoadedImages((current) => ({
                                            ...current,
                                            [index]: true,
                                        }));
                                    }}
                                />
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

            {selectedIndex !== null && (
                <div id="img-viewer" className="img gallery-view-open" onClick={closeViewer}>
                    <div className="content" onClick={(e) => e.stopPropagation()}>
                        <img
                            className="galleryIMG"
                            src={imagesData[selectedIndex].src}
                            alt={`Large Image ${selectedIndex + 1}`}
                            loading="eager"
                        />
                        <a
                            className="close"
                            href="#gallery"
                            onClick={(e) => {
                                e.preventDefault();
                                closeViewer();
                            }}
                            style={{ position: 'absolute', top: 0, right: 0 }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryFull;