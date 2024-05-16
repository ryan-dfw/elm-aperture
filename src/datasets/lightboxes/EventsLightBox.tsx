import LightBox from "../../components/Lightbox.tsx";

const Events = () => {
    const directory = 'events';
    const subDirectory = 'events';
    const details: [string, string, string, number, number][] = [
        ['Company Meeting', ', Fort Worth', 'Maivy', -30, -20],
        ['Oil Rig Visit', ', West Texas', 'Rain', 0, 0],
        ['Site Inspection', ', West Texas', 'Maivy', 0, 50],
        ['Guided Tour', ', Dallas', 'Rain', 0, 60],
        ['Graduation Party', ', Irving', 'Maivy', 0, 70],
        ['Graduation Party', ', Irving', 'Rain', 10, 90],
        ['Mai Colachi', ', Carrollton', 'Rain', 0, 60],
        ['Botswana Independence Day', ', Argyle', 'Rain', 10, 0],
        ['Botswana Independence Day', ', Argyle', 'Rain', 0, 0],
        ['Roots Remain', ", Big Rob's", 'Maivy', 10, 90],
        ['Roots Remain', ", Big Rob's", 'Rain', 10, 100],
        ['Eshtadur', ", Big Rob's", 'Maivy', 10, 120],
        ['Mogul Red Carpet', ', Irving', 'Maivy', 10, 140],
        ['Rooftop Birthday', ', Dallas', 'Rain', 10, 20],
        ['Mogul Red Carpet', ', Irving', 'Rain', 30, 130],
        ['Mogul Red Carpet', ', Irving', 'Rain', 30, 130],
        ['Mogul Red Carpet', ', Irving', 'Rain', 20, 100],
        ['Retirement Party', ', Euless', 'Rain', 40, 150]
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Events;