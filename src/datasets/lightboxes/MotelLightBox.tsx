import LightBox from "../../components/Lightbox.tsx";

const Motel = () => {
    const directory = 'realestate';
    const subDirectory = 'motel';
    const details: [string, string, string, number, number][] = [
        ['Hotel Bliss', ', Kemah TX', 'Rain', 0, 0],                        // 01
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],         // 02
        ['Stamford Inn', ', Stamford TX', 'Rain', 0, 0],                    // 03
        ['OYO', ', Corpus Christi TX', 'Rain', 0, 0],                       // 04
        ['Budget Inn', ', Corpus Christi TX', 'Rain', 0, 0],                // 05
        ['Hotel Bliss', ', Kemah TX', 'Rain', 0, 0],                        // 06
        ['OYO', ', Midland TX', 'Rain', 0, 0],                              // 07
        ['Plaza Motel', ', Corpus Christi TX', 'Rain', 0, 0],               // 08
        ['Vali Ho', ', Weslaco TX', 'Rain', 0, 0],                          // 09
        ['OYO', ', Kingsville TX', 'Rain', 0, 0],                           // 10
        ['OYO', ', Kingsville TX', 'Rain', 0, 0],                           // 11
        ["America's Best Value Inn", ', Wichita Falls TX', 'Rain', 0, 0],   // 12
        ['Hometown Inn', ', Texhoma TX', 'Rain', 0, 0],                     // 13
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],         // 14
        ['Monterrey Motel', ', Corpus Christi TX', 'Rain', 0, 0],           // 15
        ['Stamford Inn', ', Stamford TX', 'Rain', 0, 0],                    // 16
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],         // 17
        ['Hometown Inn', ', Lakin, KS', 'Rain', 0, 0]                       // 18
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Motel;