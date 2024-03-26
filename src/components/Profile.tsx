import '../styles/Profile.css'
import React, { useState, useEffect } from "react";

interface ProfileProps {
    photographer: string;
    position: string;
    vFocus: number;
}

const Profile: React.FC<ProfileProps> = ({photographer, position, vFocus}) => {
    const photographerLC = photographer.toLowerCase();
    const [adjustedMarginTop, setAdjustedMarginTop] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const interpolationFactor = 400 + (vw - 400) * (700 - 400) / (1000 - 400);
            const newAdjustedMarginTop = vFocus - (vFocus * (vw / interpolationFactor));
            setAdjustedMarginTop(newAdjustedMarginTop);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial calculation on component mount
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [vFocus]); // Re-run effect when vFocus changes

    return (
        <>
            <div className="ProfileBioContainer">
                <aside className="profile-card">
                    <header>
                        <a>
                            <img
                                src={`public/res/img/profile/${photographerLC}/${photographerLC}_thumb.webp`}
                                alt={`${photographer}'s profile picture`}
                                style={{marginTop: `${adjustedMarginTop}px`}} // Apply adjustedMarginTop
                            />
                        </a>
                    </header>
                    <div className="profile-body">
                        <div className="profile-titles">
                            <h1>{photographer}</h1>
                            <h2>{position}</h2>
                        </div>
                        <div className="profile-bio">
                            <div className="profile-description-container">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis velit ante, accumsan quis purus id, convallis tempus diam. Morbi nulla magna, efficitur quis mollis vel, luctus eu libero. </p>
                            </div>
                            <ul className="social-icons list-unstyled list-inline">
                                <li><a href="/"><i className="fa fa-behance"></i></a></li>
                                <li><a href="/"><i className="fa fa-codepen"></i></a></li>
                                <li><a href="/"><i className="fa fa-github"></i></a></li>
                                <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
};

export default Profile;
