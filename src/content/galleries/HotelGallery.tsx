import Gallery from "../../components/Gallery.tsx";

const Hotel = () => {
    const directory = 'realestate';
    const subDirectory = 'hotel';
    const layout = 'landscape';
    const details: [string, string, string, number, number][] = [
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],         // 01
        ['Ark Suites', ', Jonesboro, AR', 'Rain', 0, 0],                    // 02
        ['IHG Garner', ', Gonzalez TX', 'Rain', 0, 0],                      // 03
        ['Candlewood Suites', ', Jonesboro, AR', 'Rain', 0, 0],             // 04
        ['OYO', ', Beeville, TX', 'Rain', 0, 0],                            // 05
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],         // 06
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 07
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 08
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 09
        ['IHG Garner', ', Gonzalez TX', 'Rain', 0, 0],                      // 10
        ['Candlewood Suites', ', Jonesboro, AR', 'Rain', 0, 0],             // 11
        ['Ark Suites', ', Jonesboro, AR', 'Rain', 0, 0],                    // 12
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 13
        ['IHG Garner', ', Gonzalez TX', 'Rain', 0, 0],                      // 14
        ['Candlewood Suites', ', Jonesboro, AR', 'Rain', 0, 0],             // 15
        ['IHG Garner', ', Gonzalez TX', 'Rain', 0, 0],                      // 16
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 17
        ['Candlewood Suites', ', Jonesboro, AR', 'Rain', 0, 0]              // 18
    ];

    return <Gallery directory={directory} subDirectory={subDirectory} layout={layout} details={details}/>;
};

export default Hotel;