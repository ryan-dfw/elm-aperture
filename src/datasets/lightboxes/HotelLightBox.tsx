import LightBox from "../../components/Lightbox.tsx";

const Hotel = () => {
    const directory = 'realestate';
    const subDirectory = 'hotel';
    const details: [string, string, string, number, number][] = [
        // 01
        ['Hotel Bliss', ', Kemah TX', 'Rain', 0, 0],
        // 02
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],
        // 03
        ['Stamford Inn', ', Stamford TX', 'Rain', 0, 0],
        // 04
        ['OYO', ', Corpus Christi TX', 'Rain', 0, 0],
        // 05
        ['Budget Inn', ', Corpus Christi TX', 'Rain', 0, 0],
        // 06
        ['Hotel Bliss', ', Kemah TX', 'Rain', 0, 0],
        // 07
        ['OYO', ', Midland TX', 'Rain', 0, 0],
        // 08
        ['Plaza Motel', ', Corpus Christi TX', 'Rain', 0, 0],
        // 09
        ['Vali Ho', ', Weslaco TX', 'Rain', 0, 0],
        // 10
        ['OYO', ', Kingsville TX', 'Rain', 0, 0],
        // 11
        ['OYO', ', Kingsville TX', 'Rain', 0, 0],
        // 12
        ["America's Best Value Inn", ', Wichita Falls TX', 'Rain', 0, 0],
        // 13
        ['Hometown Inn', ', Texhoma TX', 'Rain', 0, 0],
        // 14
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],
        // 15
        ['Monterrey Motel', ', Corpus Christi TX', 'Rain', 0, 0],
        // 16
        ['Stamford Inn', ', Stamford TX', 'Rain', 0, 0],
        // 17
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],
        // 18
        ['Hometown Inn', ', Lakin, KS', 'Rain', 0, 0]
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Hotel;