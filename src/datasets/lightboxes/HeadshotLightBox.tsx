import LightBox from "../../components/Lightbox.tsx";

const Headshot = () => {
    const directory = 'portrait';
    const subDirectory = 'headshot';
    const details: [string, string, string, number, number][] = [
        ['Annie', '', 'Rain', 0, 0],
        ['Allison', '', 'Rain', 0, 0],
        ['Zach', '', 'Rain', 0, 0],
        ['Angel', '', 'Rain', 0, 0],
        ['Angelina', '', 'Rain', 0, 0],
        ['Zimo', '', 'Rain', 0, 0],
        ['Zadie', '', 'Rain', 0, 0],
        ['Lucinda', '', 'Rain', 0, 0],
        ['Julie', '', 'Maivy', 0, 0],
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