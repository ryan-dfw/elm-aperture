import LightBox from "../Lightbox.tsx";

const Lifestyle = () => {
    const directory: string = 'portrait';
    const subDirectory: string = 'lifestyle';
    const details: [string, string, string, number, number][] = [
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 100, 0],
        ['Demi', ' at Ambishen Studio', 'Rain', 0, 0],
        ['Ella', ' at Lake White Rock', 'Rain', 80, 0],
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 0, 0],
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 80, 0],
        ['Selia', ' at Fountain Square', 'Rain', 120, 0],
        ['Lilian', ' at Ambishen Studio', 'Rain', 80, 0],
        ['Thuan', ' at Downtown Fort Worth', 'Rain', 120, 0],
        ['Alyssa', ' at Ambishen Studio', 'Rain', 80, 0],
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 140, 0],
        ['Jesse', " at Texas Kill City's premiere" , 'Rain', 135, 0],
        ['Christi Lux', " at Texas Kill City's premiere" , 'Rain', 180, 0],
        ['Maivy', ' at the Arboretum', 'Rain', 0, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0],
        ['filler image', '', 'no one', 20, 0]
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Lifestyle;
