import LightBox from "../../components/Lightbox.tsx";

const Headshot = () => {
    const directory = 'portrait';
    const subDirectory = 'headshot';
    const details: [string, string, string, number, number][] = [
        ['Annie', '', 'Rain', 0, 0],                                        // 01
        ['Allison', '', 'Rain', 0, 0],                                      // 02
        ['Zach', '', 'Rain', 0, 0],                                         // 03
        ['Angel', '', 'Rain', 0, 0],                                        // 04
        ['Angelina', '', 'Rain', 0, 0],                                     // 05
        ['Zimo', '', 'Rain', 0, 0],                                         // 06
        ['Zadie', '', 'Rain', 0, 0],                                        // 07
        ['Lucinda', '', 'Rain', 0, 0],                                      // 08
        ['Julie', '', 'Maivy', 0, 0],                                       // 09
        ['filler image', '', 'no one', 0, 0],                               // 10
        ['filler image', '', 'no one', 0, 0],                               // 11
        ['filler image', '', 'no one', 0, 0],                               // 12
        ['filler image', '', 'no one', 0, 0],                               // 13
        ['filler image', '', 'no one', 0, 0],                               // 14
        ['filler image', '', 'no one', 0, 0],                               // 15
        ['filler image', '', 'no one', 0, 0],                               // 16
        ['filler image', '', 'no one', 0, 0],                               // 17
        ['filler image', '', 'no one', 0, 0]                                // 18
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Headshot;