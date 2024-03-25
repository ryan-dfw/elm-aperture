import LightBox from "../Lightbox.tsx";

const Professional = () => {
    const directory = 'portrait';
    const subDirectory = 'professional';
    const details: [string, string, string, number, number][] = [
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