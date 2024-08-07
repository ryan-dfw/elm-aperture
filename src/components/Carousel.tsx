import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';
import { isMobile } from '../utils/isMobile';

const Carousel: React.FC = () => {
    const [mobile, setMobile] = useState(isMobile());

    useEffect(() => {
        const handleResize = () => {
            setMobile(isMobile());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="carousel-container">
            <div id="homepageCarousel" className="carousel slide" data-bs-ride="carousel" style={{ width: '80vw' }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/res/img/carousel/homepage_01.webp" className="d-block w-100" alt="Image 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/res/img/carousel/homepage_02.webp" className="d-block w-100" alt="Image 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/res/img/carousel/homepage_03.webp" className="d-block w-100" alt="Image 3"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/res/img/carousel/homepage_04.webp" className="d-block w-100" alt="Image 4"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/res/img/carousel/homepage_05.webp" className="d-block w-100" alt="Image 5"/>
                    </div>
                </div>
                <div className="carousel-controls" style={{ visibility: mobile ? 'hidden' : 'visible' }}>
                    <button className="carousel-control-prev" type="button" data-bs-target="#homepageCarousel"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#homepageCarousel"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
