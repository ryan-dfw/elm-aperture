import LightBox from "../../components/Lightbox.tsx";

const Professional = () => {
    const directory = 'portrait';
    const subDirectory = 'professional';
    const details: [string, string, string, number, number][] = [
        ['Jackie', ', voice actor', 'Rain', 180, 0],                        // 01
        ['Gabriel', ', actor', 'Rain', 30, 0],                              // 02
        ['Phuong', ', sales', 'Rain', 180, 0],                              // 03
        ['Thuy Anh', ', sales', 'Rain', 60, 0],                             // 04
        ['Chris', ', realtor', 'Rain', 180, 0],                             // 05
        ['Erik', ', teacher', 'Rain', 140, 0],                              // 06
        ['Dayle', ', therapist', 'Rain', 20, 0],                            // 07
        ['filler image', '', 'no one', 20, 0],                              // 08
        ['filler image', '', 'no one', 20, 0],                              // 09
        ['filler image', '', 'no one', 20, 0],                              // 10
        ['filler image', '', 'no one', 20, 0],                              // 11
        ['filler image', '', 'no one', 20, 0],                              // 12
        ['filler image', '', 'no one', 20, 0],                              // 13
        ['filler image', '', 'no one', 20, 0],                              // 14
        ['filler image', '', 'no one', 20, 0],                              // 15
        ['filler image', '', 'no one', 20, 0],                              // 16
        ['filler image', '', 'no one', 20, 0],                              // 17
        ['filler image', '', 'no one', 20, 0]                               // 18
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Professional;