import LightBox from "../../components/Lightbox.tsx";

const Motel = () => {
    const directory = 'realestate';
    const subDirectory = 'motel';
    const details: [string, string, string, number, number][] = [
        ['River Valley Motor Inn', ', La Grange TX', 'Rain', 0, 0],         // 01
        ['Moulton Inn & Suites', ', Moulton TX', 'Rain', 0, 0],             // 02
        ['OYO', ', Corpus Christi TX', 'Rain', 0, 0],                       // 03
        ['River Valley Motor Inn', ', La Grange TX', 'Rain', 0, 0],         // 04
        ['Crown Inn', ', Denver City TX', 'Rain', 0, 0],                    // 05
        ['Regency Inn & Suites', ', Bay City TX', 'Rain', 0, 0],            // 06
        ['Hotel Bliss', ', Kemah TX', 'Rain', 0, 0],                        // 07
        ['Plaza Motel', ', Corpus Christi', 'Rain', 0, 0],                  // 08
        ['Vali Ho', ', Weslaco TX', 'Rain', 0, 0],                          // 09
        ['Budget Inn', ', Corpus Christ TX', 'Rain', 0, 0],                 // 10
        ['Island Inn', ', Galveston TX', 'Rain', 0, 0],                     // 11
        ['Best Value Inn', ', Wichita Falls TX', 'Rain', 0, 0],             // 12
        ['Hometown Inn', ', Texhoma OK', 'Rain', 0, 0],                     // 13
        ['Executive Inn', ', Pleasanton TX', 'Rain', 0, 0],                 // 14
        ['Budget Inn', ', Corpus Christ TX', 'Rain', 0, 0],                 // 15
        ['Texas Inn', ', San Benito TX', 'Rain', 0, 0],                     // 16
        ['Stamford Inn', ', Stamford TX', 'Rain', 0, 0],                    // 17
        ['Moulton Inn & Suites', ', Moulton TX', 'Rain', 0, 0]              // 18
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Motel;