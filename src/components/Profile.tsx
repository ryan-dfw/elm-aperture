import '../styles/Profile.css'
import React, { useState, useEffect } from "react";

interface ProfileProps {
    photographer: string;
    position: string;
    vFocus: number;
    bioText: string;
    urlIG: string;
    urlVimeo: string;
}

const Profile: React.FC<ProfileProps> = ({photographer, position, vFocus, bioText, urlIG, urlVimeo}) => {
    const photographerLC = photographer.toLowerCase();
    const [adjustedMarginTop, setAdjustedMarginTop] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const interpolationFactor = 400 + (vw - 400) * (700 - 400) / (1000 - 400);
            const newAdjustedMarginTop = vFocus - (vFocus * (vw / interpolationFactor));
            setAdjustedMarginTop(newAdjustedMarginTop);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [vFocus]);

    return (
        <>
            <div className="ProfileBioContainer">
                <aside className="profile-entire">
                    <div className="profile-inside">
                        <div className="profile-photoside">
                            <div className="profile-picture-frame">
                                <img className="profile-photo"
                                    src={`res/img/profile/${photographerLC}/${photographerLC}_thumb.webp`}
                                    alt={`${photographer}'s profile picture`}
                                    style={{marginTop: `${adjustedMarginTop}px`}}
                                />
                            </div>
                        </div>
                        <div className="profile-body">
                            <div className="profile-body-top-half">
                                <div className="profile-titles">
                                    <h1>{photographer}</h1>
                                    <h2>{position}</h2>
                                </div>
                                <div className="profile-icons-container">
                                    <div className="social-icons-container">
                                        <a href={`https://www.instagram.com/${urlIG}`} target="_blank"
                                           rel="noopener noreferrer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <span className="icons-divider">|</span>
                                        <a href={`https://www.vimeo.com/${urlVimeo}`} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-vimeo"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-body-bottom-half">
                                <div className="profile-description-container">
                                    <p>{bioText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
};

export default Profile;
