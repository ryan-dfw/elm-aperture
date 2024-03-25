import LightBox from "../Lightbox.tsx";

const Professional = () => {
    const directory = 'portrait';
    const subDirectory = 'professional';
    const details: [string, string, string, number, number][] = [
        ['Jackie', ', voice actor', 'Rain', 150, 220],
        ['Gabriel', ', actor', 'Rain', 0, 120],
        ['Chris', ', realtor', 'Rain', 130, 320],
        ['Erik', ', teacher', 'Rain', 20, 250],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['Dayle', ', therapist', 'no one', 20, 100],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60]
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Professional;