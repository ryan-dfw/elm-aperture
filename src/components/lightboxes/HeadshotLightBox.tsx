import LightBox from "../Lightbox.tsx";

const Headshot = () => {
    const directory = 'portrait';
    const subDirectory = 'headshot';
    const details: [string, string, string, number, number][] = [
        ['Annie', ', from Light of the World', 'Rain', 300, 0],
        ['Allison', ', from Light of the World', 'Rain', 450, 0],
        ['Angel', ', from Light of the World', 'Rain', 180, 0],
        ['Zadie', ', from Light of the World', 'Rain', 100, 0],
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