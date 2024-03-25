import LightBox from "../Lightbox.tsx";

const Hotel = () => {
    const directory = 'realestate';
    const subDirectory = 'hotel';
    const details: [string, string, string, number, number][] = [
        ['Hotel Bliss', ', Kemah TX', 'Rain', 0, 0],
        ['OYO', ', Corpus Christi TX', 'Rain', 0, 0],
        ['Hotel Bliss', ', Kemah TX', 'Rain', 0, 0],
        ['Stamford Inn', ', Stamford TX', 'Rain', 0, 0],
        ['Budget Inn', ', Corpus Christi TX', 'Rain', 0, 0],
        ['Hotel Bliss', ', Kemah TX', 'Rain', 0, 0],
        ['OYO', ', Midland TX', 'Rain', 0, 0],
        ['Plaza Motel', ', Corpus Christi TX', 'Rain', 0, 0],
        ['Vali Ho', ', Weslaco TX', 'Rain', 0, 0],
        ['OYO', ', Kingsville TX', 'Rain', 0, 0],
        ['OYO', ', Kingsville TX', 'Rain', 0, 0],
        ["America's Best Value Inn", ', Wichita Falls TX', 'Rain', 0, 0],
        ['Hometown Inn', ', Texhoma TX', 'Rain', 0, 0],
        ['Grand Eagle Ford Lodge', ', Tilden TX', 'Rain', 0, 0],
        ['Monterrey Motel', ', Corpus Christi TX', 'Rain', 0, 0],
        ['Stamford Inn', ', Stamford TX', 'Rain', 0, 0],
        ['Budget Inn', ', Corpus Christi TX', 'Rain', 0, 0],
        ['Hometown Inn', ', Lakin, KS', 'Rain', 0, 0]
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Hotel;