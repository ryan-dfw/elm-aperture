import LightBox from "../Lightbox.tsx";

const Residential = () => {
    const directory = 'realestate';
    const subDirectory = 'residential';
    const details = [
        ['Living Room','','Rain'],
        ['Living Room','','Rain'],
        ['Furniture Detail','','Rain'],
        ['Furniture Detail','','Rain'],
        ['Furniture Detail','','Rain'],
        ['Main Bed','','Rain'],
        ['Main Bed','','Rain'],
        ['Main Bath','','Rain'],
        ['Bath Detail','','Rain'],
        ['Bath Detail','','Rain'],
        ['Kitchen','','Rain'],
        ['Kitchen','','Rain'],
        ['Main Bath','','Rain'],
        ['Kitchen Detail','','Rain'],
        ['Kitchen Detail','','Rain'],
        ['Gym','','Rain'],
        ['Patio','','Rain'],
        ['Patio Detail','','Rain'],
        ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Residential;