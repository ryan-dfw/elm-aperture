import LightBox from "../Lightbox.tsx";

const Events = () => {
    const directory = 'events';
    const subDirectory = 'events';
    const details: [string, string, string, number, number][] = [
        ['Company Meeting', ', Fort Worth', 'Maivy', 0, 0],
        ['Oil Rig Visit', ', West Texas', 'Rain', 0, 0],
        ['Site Inspection', ', West Texas', 'Maivy', 0, 0],
        ['Guided Tour', ', Dallas', 'Rain', 0, 0],
        ['Graduation Party', ', Irving', 'Maivy', 0, 0],
        ['Graduation Party', ', Irving', 'Rain', 0, 0],
        ['Mai Colachi', ', Carrollton', 'Rain', 0, 0],
        ['Botswana Independence', ', Argyle', 'Rain', 0, 0],
        ['Botswana Independence', ', Argyle', 'Rain', 0, 0],
        ['Roots Remain', ", Big Rob's", 'Maivy', 0, 0],
        ['Roots Remain', ", Big Rob's", 'Rain', 0, 0],
        ['Eshtadur', ", Big Rob's", 'Maivy', 0, 0],
        ['Mogul Red Carpet', ', Irving', 'Maivy', 0, 0],
        ['Rooftop Birthday', ', Dallas', 'Rain', 0, 0],
        ['Mogul Red Carpet', ', Irving', 'Rain', 0, 0],
        ['Mogul Red Carpet', ', Irving', 'Rain', 0, 0],
        ['Mogul Red Carpet', ', Irving', 'Rain', 0, 0],
        ['Retirement Party', ', Euless', 'Rain', 0, 0]
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Events;