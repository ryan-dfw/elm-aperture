import Profile from "../Profile.tsx";

const ScottProfile = () => {

    const photographer = "Scott"
    const position = "PHOTOGRAPHER"
    const vFocus = 70;
    const bioText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    const urlIG = "xholografix"
    const urlVimeo = ""
    const email = "scottxbandz@gmail.com"
    const phoneNumber = "901.620.8785"
    return <Profile photographer={photographer} position={position} vFocus={vFocus} bioText={bioText} urlIG={urlIG}
                    urlVimeo={urlVimeo} email={email} phoneNumber={phoneNumber}/>;
};

export default ScottProfile;