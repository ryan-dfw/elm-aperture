import Profile from "../Profile.tsx";

const MerakiProfile = () => {

    const photographer = "Meraki"
    const position = "PHOTOGRAPHER"
    const vFocus = 165;
    const bioText = "I've been a photographer since 2020. " +
        "I love using my skills to make others happy with photos that will last generations. " +
        "Whether it's events, fashion, brand building, or modelling, I will bring your vision to life.";
    const urlIG = "merakiphotos1"
    const urlVimeo = ""
    const email = "allloveinfinitymeraki@gmail.com"
    const phoneNumber = ""
    return <Profile photographer={photographer} position={position} vFocus={vFocus} bioText={bioText} urlIG={urlIG}
                    urlVimeo={urlVimeo} email={email} phoneNumber={phoneNumber}/>;
};

export default MerakiProfile;