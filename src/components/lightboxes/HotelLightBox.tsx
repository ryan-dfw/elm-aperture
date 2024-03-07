import '../../styles/Lightbox.scss';
import { useContextValue} from "../../contexts/Context.tsx";
import {useCallback, useEffect} from "react";

const HotelLightBox = () => {
    const { setShouldShowNav } = useContextValue();
    const closeLightbox = useCallback(() => {
        setShouldShowNav(true);
    }, [setShouldShowNav]);

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
            if (event.key === 'Escape') {
                const closeButtons = document.querySelectorAll('.close');
                if (closeButtons.length > 0) {
                    const firstCloseButton = closeButtons[0] as HTMLAnchorElement;
                    firstCloseButton.click();
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
            if (window.location.hash === '#gallery') {
                setShouldShowNav(true);
            }
        };
    }, [closeLightbox, setShouldShowNav]);

    const imagesData = [
        { src: 'https://picsum.photos/600/600/?image=512', title: 'filler image 1' },
        { src: 'https://picsum.photos/600/600/?image=513', title: 'filler image 2' },
        { src: 'https://picsum.photos/600/600/?image=514', title: 'filler image 3' },
        { src: 'https://picsum.photos/600/600/?image=515', title: 'filler image 4' },
        { src: 'https://picsum.photos/600/600/?image=516', title: 'filler image 5' },
        { src: 'https://picsum.photos/600/600/?image=517', title: 'filler image 6' },
        { src: 'https://picsum.photos/600/600/?image=518', title: 'filler image 7' },
        { src: 'https://picsum.photos/600/600/?image=519', title: 'filler image 8' },
        { src: 'https://picsum.photos/600/600/?image=520', title: 'filler image 9' },
        { src: 'https://picsum.photos/600/600/?image=521', title: 'filler image 10' },
        { src: 'https://picsum.photos/600/600/?image=522', title: 'filler image 11' },
        { src: 'https://picsum.photos/600/600/?image=523', title: 'filler image 12' },
        { src: 'https://picsum.photos/600/600/?image=524', title: 'filler image 13' },
        { src: 'https://picsum.photos/600/600/?image=525', title: 'filler image 14' },
        { src: 'https://picsum.photos/600/600/?image=526', title: 'filler image 15' },
        { src: 'https://picsum.photos/600/600/?image=527', title: 'filler image 16' },
        { src: 'https://picsum.photos/600/600/?image=528', title: 'filler image 17' },
        { src: 'https://picsum.photos/600/600/?image=529', title: 'filler image 18' },
    ];

    return (
        <div className="gallery-container">
            <div className="gallery">
                {imagesData.map((image, index) => (
                    <div className="galleryimage" key={index}>
                        <img src={image.src} alt={`Gallery Image ${index + 1}`} />
                        <a href={`#img-${index + 1}`}>filler image</a>
                    </div>
                ))}
            </div>

            {imagesData.map((image, index) => (
                <div className="img" id={`img-${index + 1}`} key={`img-${index + 1}`}>
                    <div className="content">
                        <img src={image.src.replace('600/600', '1920/1080')} alt={`Large Image ${index + 1}`}/>
                        <div className="title">
                            No. <b>{index + 512}</b> from Picsum
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
        </div>
    );
};

export default HotelLightBox;
