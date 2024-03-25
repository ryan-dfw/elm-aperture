import LightBox from "../Lightbox.tsx";

const Residential = () => {
    const directory = 'realestate';
    const subDirectory = 'residential';
    const details: [string, string, string, number, number][] = [
        ['Living Room','','Rain', 0, 0],
        ['Living Room','','Rain', 0, 0],
        ['Furniture Detail','','Rain', 0, 0],
        ['Furniture Detail','','Rain', 0, 0],
        ['Furniture Detail','','Rain', 0, 0],
        ['Main Bed','','Rain', 0, 0],
        ['Main Bed','','Rain', 0, 0],
        ['Main Bath','','Rain', 0, 0],
        ['Bath Detail','','Rain', 0, 0],
        ['Bath Detail','','Rain', 0, 0],
        ['Kitchen','','Rain', 0, 0],
        ['Kitchen','','Rain', 0, 0],
        ['Main Bath','','Rain', 0, 0],
        ['Kitchen Detail','','Rain', 0, 0],
        ['Kitchen Detail','','Rain', 0, 0],
        ['Gym','','Rain', 0, 0],
        ['Patio','','Rain', 0, 0],
        ['Patio Detail','','Rain', 0, 0],
        ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Residential;