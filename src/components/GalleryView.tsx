import React, { useEffect } from "react";
import { useContextValue } from "../contexts/Context.tsx";

export interface GalleryImageData {
    src: string;
    thumbSrc: string;
    title: string;
    detail: string;
    photographer: string;
}

interface GalleryViewProps {
    imagesData: GalleryImageData[];
    imageOpen: boolean;
    setImageOpen: (value: boolean) => void;
    selectedIndex: number | null;
    setSelectedIndex: (value: number | null) => void;
}

const GalleryView: React.FC<GalleryViewProps> = ({
                                                     imagesData,
                                                     imageOpen,
                                                     setImageOpen,
                                                     selectedIndex,
                                                     setSelectedIndex,
                                                 }) => {
    const { setShouldShowNav } = useContextValue();

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const closeButtons = document.querySelectorAll(".close");

            if (event.key === "Escape" && closeButtons.length > 0) {
                const firstCloseButton = closeButtons[0] as HTMLAnchorElement;
                firstCloseButton.click();
                return;
            }

            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                if (selectedIndex === null) return;
                const currentIndex = selectedIndex + 1;

                if (!isNaN(currentIndex)) {
                    const newIndex =
                        event.key === "ArrowLeft"
                            ? currentIndex === 1
                                ? imagesData.length
                                : currentIndex - 1
                            : currentIndex === imagesData.length
                                ? 1
                                : currentIndex + 1;

                    setSelectedIndex(newIndex - 1);
                }
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [imagesData.length, selectedIndex, setSelectedIndex]);

    useEffect(() => {
        const handleOutsideClick = (event: Event) => {
            const galleryImg = document.querySelector(".galleryIMG");

            if (galleryImg && !galleryImg.contains(event.target as Node)) {
                const closeButtons = document.querySelectorAll(".close");

                if (closeButtons.length > 0) {
                    const firstCloseButton = closeButtons[0] as HTMLAnchorElement;
                    firstCloseButton.click();
                }
            }
        };

        const galleryContainer = document.querySelector(".gallery-container");

        if (galleryContainer) {
            galleryContainer.addEventListener("click", handleOutsideClick);
        }

        return () => {
            if (galleryContainer) {
                galleryContainer.removeEventListener("click", handleOutsideClick);
            }
        };
    }, []);

    if (selectedIndex === null) {
        return null;
    }

    const image = imagesData[selectedIndex];
    const imageNumber = selectedIndex + 1;

    return (
        <div className="img gallery-view-open" id={`img-${imageNumber}`} key={`img-${imageNumber}`}>
            <div className="content">
                <img
                    className="galleryIMG"
                    src={image.src}
                    alt={`Large Image ${imageNumber}`}
                    loading="eager"
                />

                <div className="title">
                    {`${image.title}${image.detail}, shot by ${image.photographer}`}
                </div>

                <a
                    id={`closeButton-${imageNumber}`}
                    className="close"
                    href="#gallery"
                    onClick={() => {
                        if (imageOpen) {
                            setShouldShowNav(true);
                            setImageOpen(false);
                            setSelectedIndex(null);
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
    );
};

export default GalleryView;