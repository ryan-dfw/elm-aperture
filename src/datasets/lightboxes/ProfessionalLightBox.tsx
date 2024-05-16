import LightBox from "../../components/Lightbox.tsx";

const Professional = () => {
    const directory = 'portrait';
    const subDirectory = 'professional';
    const details: [string, string, string, number, number][] = [
        ['Jackie', ', voice actor', 'Rain', 180, 0],
        ['Gabriel', ', actor', 'Rain', 30, 0],
        ['Phuong', ', sales', 'Rain', 180, 0],
        ['Thuy Anh', ', sales', 'Rain', 60, 0],
        ['Chris', ', realtor', 'Rain', 180, 0],
        ['Erik', ', teacher', 'Rain', 140, 0],
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