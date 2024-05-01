import Profile from "../Profile.tsx";

const ScottProfile = () => {

    const photographer = "Scott"
    const position = "PHOTOGRAPHER"
    const vFocus = 70;
    const bioText = "Since 2020, my camera has been my constant companion, " +
        "as I travel the world and share my perspective with others. " +
        "What sets my work apart is my commitment to authenticity and connection, " +
        "as I forge genuine relationships with my clients, subjects, and places. " +
        "I believe in the power of photography to inspire and provoke thought. " +
        "With each image, I hope to evoke emotions and ignite imaginations.";
    const urlIG = "xholografix"
    const urlVimeo = ""
    const email = "scottxbandz@gmail.com"
    const phoneNumber = "901.620.8785"
    return <Profile photographer={photographer} position={position} vFocus={vFocus} bioText={bioText} urlIG={urlIG}
                    urlVimeo={urlVimeo} email={email} phoneNumber={phoneNumber}/>;
};

export default ScottProfile;