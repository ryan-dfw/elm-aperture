import '../styles/PhotosRow.css'

const PhotosRow = () => {
    const tempImages = [
        "hotel_full_03_thumb.webp",
        "hotel_full_44_thumb.webp",
        "hotel_full_93_thumb.webp",
        "hotel_full_64_thumb.webp",
        "hotel_full_286_thumb.webp"
    ];

    return (
        <div className="photos-row">
            <div className="photos-container">
                {tempImages.map((image, index) => (
                    <div key={index} className="photo-wrapper">
                        <img src={`/public/res/img/realestate/hotel_full/thumb/${image}`}
                             alt={`Hotel photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhotosRow;
