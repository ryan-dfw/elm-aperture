import LightBox from "../../components/Lightbox.tsx";

const Lifestyle = () => {
    const directory: string = 'portrait';
    const subDirectory: string = 'lifestyle';
    const details: [string, string, string, number, number][] = [
        ['Nick', ' at Habitat Commons', 'Rain', 100, 0],                    // 01
        ['Demi', ' at Ambishen Studio', 'Rain', 0, 0],                      // 02
        ['Ella', ' at Lake White Rock', 'Rain', 80, 0],                     // 03
        ['Simone', ' at Habitat Commons', 'Rain', 0, 0],                    // 04
        ['Jada', ' at Habitat Commons', 'Rain', 80, 0],                     // 05
        ['Selia', ' at Fountain Square', 'Rain', 120, 0],                   // 06
        ['Amalia', ' at Ambishen Studio', 'Rain', 300, 0],                  // 07
        ['Thuan', ' at Downtown Fort Worth', 'Rain', 120, 0],               // 08
        ['Alyssa', ' at Ambishen Studio', 'Rain', 80, 0],                   // 09
        ['Kevin', ' at Habitat Commons', 'Rain', 140, 0],                   // 10
        ['Jesse', " at Texas Kill City's premiere" , 'Rain', 135, 0],       // 11
        ['Christi Lux', " at Texas Kill City's premiere" , 'Rain', 180, 0], // 12
        ['Lilian', ' at Ambishen Studio', 'Rain', 120, 0],                  // 13
        ['Adam', ' at a Prosper crop field', 'Rain', 0, 0],                 // 14
        ['Tea', ' with an umbrella', 'Rain', 100, 0],                       // 15
        ['filler image', '', 'no one', 20, 0],                              // 16
        ['filler image', '', 'no one', 20, 0],                              // 17
        ['filler image', '', 'no one', 20, 0]                               // 18
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Lifestyle;
