import LightBox from "../Lightbox.tsx";

const Hotel = () => {
    const commercialDirectory = 'realestate';
    const commercialSubDirectory = 'hotel';
    const commercialDetails = [
        ['Hotel Bliss', ', Kemah TX', 'Rain'],
        ['OYO', ', Corpus Christi TX', 'Rain'],
        ['Hotel Bliss', ', Kemah TX', 'Rain'],
        ['Stamford Inn', ', Stamford TX', 'Rain'],
        ['Budget Inn', ', Corpus Christi TX', 'Rain'],
        ['Hotel Bliss', ', Kemah TX', 'Rain'],
        ['OYO', ', Midland TX', 'Rain'],
        ['Plaza Motel', ', Corpus Christi TX', 'Rain'],
        ['Vali Ho', ', Weslaco TX', 'Rain'],
        ['OYO', ', Kingsville TX', 'Rain'],
        ['OYO', ', Kingsville TX', 'Rain'],
        ["America's Best Value Inn", ', Wichita Falls TX', 'Rain'],
        ['Hometown Inn', ', Texhoma TX', 'Rain'],
        ['Grand Eagle Ford Lodge', ', Tilden TX', 'Rain'],
        ['Monterrey Motel', ', Corpus Christi TX', 'Rain'],
        ['Stamford Inn', ', Stamford TX', 'Rain'],
        ['Budget Inn', ', Corpus Christi TX', 'Rain'],
        ['Hometown Inn', ', Lakin, KS', 'Rain']
    ];

    return <LightBox  directory={commercialDirectory} subDirectory={commercialSubDirectory} details={commercialDetails}/>;
};

export default Hotel;