import Profile from "../Profile.tsx";

const MaivyProfile = () => {

    const photographer = "Maivy"
    const position = "PHOTOGRAPHER"
    const vFocus = 70;
    const bioText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Donec ullamcorper dui sit amet dolor pulvinar, at vulputate leo tempor." +
        "Curabitur varius ornare ante finibus imperdiet." +
        "Phasellus ut lorem id massa malesuada scelerisque at non neque.Cras ut neque at neque sagittis mattis." +
        "Fusce accumsan vehicula gravida. Vivamus posuere lacus sed varius tempor.";
    const urlIG = "maivyphotos"
    const urlVimeo = "user204045381"
    const email = ""
    const phoneNumber = ""
    return <Profile photographer={photographer} position={position} vFocus={vFocus} bioText={bioText} urlIG={urlIG}
                    urlVimeo={urlVimeo} email={email} phoneNumber={phoneNumber}/>;
};

export default MaivyProfile;