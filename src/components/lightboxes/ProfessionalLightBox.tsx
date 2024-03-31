import LightBox from "../Lightbox.tsx";

const Professional = () => {
    const directory = 'portrait';
    const subDirectory = 'professional';
    const details: [string, string, string, number, number][] = [
        ['Jackie', ', voice actor', 'Rain', 150, 0],
        ['Gabriel', ', actor', 'Rain', 0, 0],
        ['Chris', ', realtor', 'Rain', 130, 0],
        ['Erik', ', teacher', 'Rain', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['Dayle', ', therapist', 'Rain', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0]
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Professional;