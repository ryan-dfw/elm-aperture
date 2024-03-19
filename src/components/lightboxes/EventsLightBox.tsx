import LightBox from "../Lightbox.tsx";

const Events = () => {
    const directory = 'events';
    const subDirectory = 'events';
    const details = [
        ['Company Meeting', ', Fort Worth', 'Maivy'],
        ['Oil Rig Visit', ', West Texas', 'Rain'],
        ['Site Inspection', ', West Texas', 'Maivy'],
        ['Guided Tour', ', Dallas', 'Rain'],
        ['Graduation Party', ', Irving', 'Maivy'],
        ['Graduation Party', ', Irving', 'Rain'],
        ['Mai Colachi', ', Carrollton', 'Rain'],
        ['Botswana Independence', ', Argyle', 'Rain'],
        ['Botswana Independence', ', Argyle', 'Rain'],
        ['Roots Remain', ", Big Rob's", 'Maivy'],
        ['Roots Remain', ", Big Rob's", 'Rain'],
        ['Eshtadur', ", Big Rob's", 'Maivy'],
        ['Mogul Red Carpet', ', Irving', 'Maivy'],
        ['Rooftop Birthday', ', Dallas', 'Rain'],
        ['Mogul Red Carpet', ', Irving', 'Rain'],
        ['Mogul Red Carpet', ', Irving', 'Rain'],
        ['Mogul Red Carpet', ', Irving', 'Rain'],
        ['Retirement Party', ', Euless', 'Rain']
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Events;