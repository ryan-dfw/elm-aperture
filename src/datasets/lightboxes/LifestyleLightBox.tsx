import LightBox from "../../components/Lightbox.tsx";

const Lifestyle = () => {
    const directory: string = 'portrait';
    const subDirectory: string = 'lifestyle';
    const details: [string, string, string, number, number][] = [
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 100, 0],         // 01
        ['Demi', ' at Ambishen Studio', 'Rain', 0, 0],                      // 02
        ['Ella', ' at Lake White Rock', 'Rain', 80, 0],                     // 03
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 0, 0],           // 04
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 80, 0],          // 05
        ['Selia', ' at Fountain Square', 'Rain', 120, 0],                   // 06
        ['Amalia', ' at Ambishen Studio', 'Rain', 300, 0],                  // 07
        ['Thuan', ' at Downtown Fort Worth', 'Rain', 120, 0],               // 08
        ['Alyssa', ' at Ambishen Studio', 'Rain', 80, 0],                   // 09
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 140, 0],         // 10
        ['Jesse', " at Texas Kill City's premiere" , 'Rain', 135, 0],       // 11
        ['Christi Lux', " at Texas Kill City's premiere" , 'Rain', 180, 0], // 12
        ['Lilian', ' at Ambishen Studio', 'Rain', 120, 0],                  // 13
        ['Maivy', ' at the Arboretum', 'Rain', 10, 0],                      // 14
        ['filler image', '', 'no one', 20, 0],                              // 15
        ['filler image', '', 'no one', 20, 0],                              // 16
        ['filler image', '', 'no one', 20, 0],                              // 17
        ['filler image', '', 'no one', 20, 0]                               // 18
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Lifestyle;
