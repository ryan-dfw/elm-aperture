import Profile from "../../components/Profile.tsx";

const AlejandroProfile = () => {

    const photographer = "Alejandro"
    const position = "LEAD VIDEOGRAPHER"
    const vFocus = 0;
    const bioText = "A Dallas-based photographer and videographer obsessed with color, atmosphere, " +
    "and storytelling, whose style blends cinematic lighting with expressive portraiture to create images " +
    "that feel alive. Artists, brands, and everyday people - if there's a story to tell, I'm there to capture it.";
    const urlIG = "navalabs_official"
    const email = "alexnavarro1127@gmail.com"
    const phoneNumber = ""


    return <Profile
        photographer={photographer}
        position={position}
        vFocus={vFocus}
        bioText={bioText}
        urlIG={urlIG}
        urlVimeo={""}
        email={email}
        phoneNumber={phoneNumber}
    />;
};

export default AlejandroProfile;