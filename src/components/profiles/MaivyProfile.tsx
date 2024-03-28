import Profile from "../Profile.tsx";

const MaivyProfile = () => {

    const photographer = "Maivy"
    const position = "Photographer"
    const vFocus = 70;
    const bioText = "Lorem ipsum, dolor sit amet.";
    const urlIG = "maivyphotos"
    const urlVimeo = "user204045381"
    const email = ""
    const phoneNumber = ""
    return <Profile photographer={photographer} position={position} vFocus={vFocus} bioText={bioText} urlIG={urlIG} urlVimeo={urlVimeo} email={email} phoneNumber={phoneNumber}/>;
};

export default MaivyProfile;