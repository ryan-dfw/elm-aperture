import "../../styles/service/ImageWithTitle.css";

type ImageWithTitleProps = {
    heading: string;
    src: string;
    alt: string;
};

const ImageWithTitle = ({ heading, src, alt }: ImageWithTitleProps) => {
    return (
        <div className="image-with-title">
            <div className="service-copy">
                <div className="service-section-heading heading-compact">
                    <div className="horizontal-line" />
                    <h3>{heading}</h3>
                    <div className="horizontal-line" />
                </div>
            </div>

            <div className="image-container">
                <img
                    className="coverage-map"
                    src={src}
                    alt={alt}
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default ImageWithTitle;