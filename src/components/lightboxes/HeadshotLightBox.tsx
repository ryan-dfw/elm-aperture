import LightBox from "../Lightbox.tsx";

const Headshot = () => {
    const directory = 'portrait';
    const subDirectory = 'headshot';
    const details: [string, string, string, number, number][] = [
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
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0],
        ['filler image', '', 'no one', 0, 0]
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Headshot;