import Gallery from "../../components/Gallery.tsx";

const Residential = () => {
    const directory = 'realestate';
    const subDirectory = 'residential';
    const layout = 'landscape';
    const details: [string, string, string, number, number][] = [
        ['Living Room', ' bracket', 'Rain', 0, 0],      // 01
        ['Living Room', ' bracket', 'Rain', 0, 0],      // 02
        ['Furniture', ' detail', 'Rain', 0, 0],         // 03
        ['Furniture', ' detail', 'Rain', 0, 0],         // 04
        ['Furniture', ' detail', 'Rain', 0, 0],         // 05
        ['Main Bed', ' bracket', 'Rain', 0, 0],         // 06
        ['Main Bed', ' bracket', 'Rain', 0, 0],         // 07
        ['Main Bath', ' bracket', 'Rain', 0, 0],        // 08
        ['Bath', ' detail', 'Rain', 0, 0],              // 09
        ['Bath', ' detail', 'Rain', 0, 0],              // 10
        ['Kitchen', ' bracket', 'Rain', 0, 0],          // 11
        ['Kitchen', ' bracket', 'Rain', 0, 0],          // 12
        ['Main Bath', ' bracket', 'Rain', 0, 0],        // 13
        ['Kitchen', ' detail', 'Rain', 0, 0],           // 14
        ['Kitchen', ' detail', 'Rain', 0, 0],           // 15
        ['Gym', ' bracket', 'Rain', 0, 0],              // 16
        ['Patio', ' bracket', 'Rain', 0, 0],            // 17
        ['Patio', ' detail', 'Rain', 0, 0],             // 18
    ];
    return <Gallery directory={directory} subDirectory={subDirectory} layout={layout} details={details}/>;
};

export default Residential;