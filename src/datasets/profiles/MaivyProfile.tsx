import Profile from "../../components/Profile.tsx";

const MaivyProfile = () => {

    const photographer = "Maivy"
    const position = "PHOTOGRAPHER"
    const vFocus = 70;
    const bioText = "I've been a photographer for the past two years. " +
        "What drew me to this art form was the ability to connect with people and places in a unique way, " +
        "capturing moments to tell the stories of the people I meet along the way. " +
        "As I refine my skills and build my portfolio, " +
        "I'm especially interested in working more in weddings and with couples, " +
        "as well as capturing shows and events.";
    const urlIG = "maivyphotos"
    const urlVimeo = "user204045381"
    const email = "kimirius1999@gmail.com"
    const phoneNumber = ""
    return <Profile photographer={photographer} position={position} vFocus={vFocus} bioText={bioText} urlIG={urlIG}
                    urlVimeo={urlVimeo} email={email} phoneNumber={phoneNumber}/>;
};

export default MaivyProfile;