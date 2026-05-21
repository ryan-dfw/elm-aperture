import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryHero from '../GalleryHero';

type CaseStudyPreviewProps = {
    route: string;
    title: string;
    heroName: string;
    featuredImage: string;
    desktopText: string;
    mobileText: string;
};

const CaseStudyPreview = ({
                              route,
                              title,
                              heroName,
                              featuredImage,
                              desktopText,
                              mobileText,
                          }: CaseStudyPreviewProps) => {
    const navigate = useNavigate();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className="hero-wrapper"
            onClick={() => navigate(route)}
            style={{ cursor: 'pointer' }}
        >
            {isDesktop && (
                <div className="hero-header clickable-header">
                    <h4>{title}</h4>
                </div>
            )}

            <GalleryHero
                name={heroName}
                number={featuredImage}
            />

            <p className="hero-descriptor">
                {isDesktop ? desktopText : mobileText}
            </p>
        </div>
    );
};

export default CaseStudyPreview;