import React, { useEffect, useState } from "react";
import "../styles/gallery/Gallery.scss";
import { useContextValue } from "../contexts/Context.tsx";
import GalleryView, { GalleryImageData } from "./GalleryView.tsx";
import {
    GalleryLayout,
    GalleryImageDetail,
} from "../types/gallery.ts";

interface GalleryProps {
    directory: string;
    subDirectory: string;
    layout: GalleryLayout;
    details: GalleryImageDetail[];
}

const Gallery: React.FC<GalleryProps> = ({ directory, subDirectory, layout, details }) => {
    const [imageOpen, setImageOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [showOrdinals, setShowOrdinals] = useState(true);
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

    const basePath = `res/img/${directory}/`;
    const { setShouldShowNav } = useContextValue();

    const offsetDesktop = details.map((item) => item[3]);
    const offsetMobile = details.map((item) => item[4]);

    const bigThumbIndexes = [0, 1, 6, 12];
    const shouldUseBigThumbs =
        window.innerWidth > 1000 &&
        (layout === "landscape" || layout === "mixed");

    const imagesData: GalleryImageData[] = details.map(
        ([title, detail, photographer], index) => {
            const imageNumber = (index + 1)
                .toString()
                .padStart(2, "0");

            const thumbFolder =
                shouldUseBigThumbs && bigThumbIndexes.includes(index)
                    ? "big_thumb"
                    : "thumb";

            const thumbSuffix =
                thumbFolder === "big_thumb"
                    ? "_big_thumb"
                    : "_thumb";

            return {
                src: `${basePath}${subDirectory}/full/${subDirectory}_${imageNumber}.webp`,
                thumbSrc: `${basePath}${subDirectory}/${thumbFolder}/${subDirectory}_${imageNumber}${thumbSuffix}.webp`,
                title,
                detail,
                photographer,
            };
        }
    );

    const applyOffset = (desktopOffsets: number[], mobileOffsets: number[]) => {
        const windowWidth = window.innerWidth;
        const galleryImages = document.querySelectorAll(".galleryimage img");

        galleryImages.forEach((image, i) => {
            const imgElement = image as HTMLImageElement;

            if (windowWidth > 1080) {
                imgElement.style.marginTop = `${desktopOffsets[i]}px`;
            } else if (windowWidth >= 800) {
                imgElement.style.marginTop = `${desktopOffsets[i] / 2}px`;
            } else {
                imgElement.style.marginTop = `${mobileOffsets[i]}px`;
            }
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            applyOffset(offsetDesktop, offsetMobile);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [offsetDesktop, offsetMobile]);

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

    return (
        <div className={`gallery-container ${layout}`}>
            <div
                className={`gallery ${
                    layout === "portrait" && window.innerWidth > 1000 ? "headshot-grid" : ""
                }`}
            >
                {imagesData.map((image, index: number) => (
                    <div
                        className={`galleryimage ${loadedImages[index] ? "loaded" : ""}`}
                        key={index}
                        style={{ position: "relative" }}
                        onClick={() => {
                            setSelectedIndex(index);

                            setTimeout(() => {
                                setImageOpen(true);
                            }, 500);

                            setShouldShowNav(false);
                        }}
                    >
                        <img
                            className={loadedImages[index] ? "loaded" : ""}
                            src={image.thumbSrc}
                            alt={`Gallery Image ${index + 1}`}
                            loading="lazy"
                            onLoad={() => {
                                setLoadedImages((current) => ({
                                    ...current,
                                    [index]: true,
                                }));
                            }}
                        />
                        <a href={`#img-${index + 1}`}>{image.title}</a>
                        {showOrdinals && (
                            <div className="ordinal-overlay">
                                {index + 1}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <GalleryView
                imagesData={imagesData}
                imageOpen={imageOpen}
                setImageOpen={setImageOpen}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
        </div>
    );
};

export default Gallery;