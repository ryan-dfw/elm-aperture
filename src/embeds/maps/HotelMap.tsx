import "../../styles/Maps.css";

const HotelMap = () => {
    return (
        <div className="map-wrapper">
            <iframe
                className="embedmap"
                src="https://www.google.com/maps/d/u/0/embed?mid=1k4nyGhqu1UnOoiUrHhlDvXXBxjUNtA8&ehbc=2E312F&z=5"
                loading="lazy"
            />
        </div>
    );
};

export default HotelMap;
