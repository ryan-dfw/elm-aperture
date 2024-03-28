import Profile from "../Profile.tsx";

const RainProfile = () => {

    const photographer = "Rain"
    const position = "LEAD PHOTOGRAPHER"
    const vFocus = 70;
    const bioText = "With ten years' experience in photos and video," +
        "i've helped businesses and individuals achieve their branding, marketing, and internal goals." +
        "I believe photography can be a way to express identity and purpose -" +
        "so i shoot everything from models to hotels to testimonials with this in mind." +
        "My works tend to chase strong colour with even lighting and an emphasis on balance.";
    const urlIG = "raindfwphotos"
    const email = "raindfwphotos@gmail.com"
    const phoneNumber = "469.620.0579"
    return <Profile photographer={photographer} position={position} vFocus={vFocus} bioText={bioText} urlIG={urlIG}
                    urlVimeo={urlIG} email={email} phoneNumber={phoneNumber}/>;
};

export default RainProfile;