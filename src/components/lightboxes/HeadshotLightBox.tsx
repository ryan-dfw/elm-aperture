import LightBox from "../Lightbox.tsx";

const Headshot = () => {
    const directory = 'portrait';
    const subDirectory = 'headshot';
    const details: [string, string, string, number, number][] = [
        ['Annie', '', 'Rain', 300, 0],
        ['Allison', '', 'Rain', 450, 0],
        ['Angel', '', 'Rain', 180, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0]
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Headshot;