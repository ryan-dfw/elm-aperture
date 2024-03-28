import '../styles/Profile.css'
import React, { useState, useEffect } from "react";

interface ProfileProps {
    photographer: string;
    position: string;
    vFocus: number;
    bioText: string;
    urlIG: string;
    urlVimeo: string;
    email: string;
    phoneNumber: string;
}

const Profile: React.FC<ProfileProps> = ({photographer, position, vFocus, bioText, urlIG, urlVimeo, email, phoneNumber}) => {
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
                                        {[
                                            {
                                                value: urlIG,
                                                prefix: "https://www.instagram.com/",
                                                icon: "fab fa-instagram"
                                            },
                                            {value: urlVimeo, prefix: "https://www.vimeo.com/", icon: "fab fa-vimeo"},
                                            {value: email, prefix: "mailto:", icon: "fas fa-envelope"},
                                            {value: phoneNumber, prefix: "tel:", icon: ""}
                                        ].map((item, index) => (
                                            item.value && typeof item.value === 'string' && item.value.trim() !== '' ? (
                                                <React.Fragment key={index}>
                                                    {index !== 0 && <span className="icons-divider">|</span>}
                                                    <a href={`${item.prefix}${item.value}`} target="_blank"
                                                       rel="noopener noreferrer">
                                                        {item.icon && <i className={item.icon}></i>}
                                                        {item.icon === "" ? item.value : null}
                                                    </a>
                                                </React.Fragment>
                                            ) : null
                                        ))}
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
