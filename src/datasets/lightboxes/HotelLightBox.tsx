import LightBox from "../../components/Lightbox.tsx";

const Hotel = () => {
    const directory = 'realestate';
    const subDirectory = 'hotel';
    const details: [string, string, string, number, number][] = [
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],         // 01
        ['Ark Suites', ', Jonesboro, AR', 'Rain', 0, 0],                    // 02
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],         // 03
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 04
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],         // 05
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],         // 06
        ['Candlewood Suites', ', Jonesboro, AR', 'Rain', 0, 0],             // 07
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 08
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 09
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 10
        ['Candlewood Suites', ', Jonesboro, AR', 'Rain', 0, 0],             // 11
        ['Ark Suites', ', Jonesboro, AR', 'Rain', 0, 0],                    // 12
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 13
        ['Holiday Inn Express', ', Schulenberg, TX', 'Rain', 0, 0],         // 14
        ['Candlewood Suites', ', Jonesboro, AR', 'Rain', 0, 0],             // 15
        ['Ark Suites', ', Jonesboro, AR', 'Rain', 0, 0],                    // 16
        ['Holiday Inn', ', Jonesboro, AR', 'Rain', 0, 0],                   // 17
        ['Candlewood Suites', ', Jonesboro, AR', 'Rain', 0, 0]              // 18
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Hotel;