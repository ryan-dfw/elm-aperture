import LightBox from "../../components/Lightbox.tsx";

const Events = () => {
    const directory = 'events';
    const subDirectory = 'events';
    const details: [string, string, string, number, number][] = [
        // 01
        ['Company Meeting', ', Fort Worth', 'Maivy', -30, -20],
        // 02
        ['Oil Rig Visit', ', West Texas', 'Rain', 0, 0],
        // 03
        ['Site Inspection', ', West Texas', 'Maivy', 0, 50],
        // 04
        ['Guided Tour', ', Dallas', 'Rain', 0, 60],
        // 05
        ['Graduation Party', ', Irving', 'Maivy', 0, 70],
        // 06
        ['Graduation Party', ', Irving', 'Rain', 10, 90],
        // 07
        ['Mai Colachi', ', Carrollton', 'Rain', 0, 60],
        // 08
        ['Botswana Independence Day', ', Argyle', 'Rain', 10, 0],
        // 09
        ['Botswana Independence Day', ', Argyle', 'Rain', 0, 0],
        // 10
        ['Roots Remain', ", Big Rob's", 'Maivy', 10, 90],
        // 11
        ['Roots Remain', ", Big Rob's", 'Rain', 10, 100],
        // 12
        ['Eshtadur', ", Big Rob's", 'Maivy', 10, 120],
        // 13
        ['Mogul Red Carpet', ', Irving', 'Maivy', 10, 140],
        // 14
        ['Rooftop Birthday', ', Dallas', 'Rain', 10, 20],
        // 15
        ['Mogul Red Carpet', ', Irving', 'Rain', 30, 130],
        // 16
        ['Engagement Party', ', Mi Cocina', 'Rain', 30, 130],
        // 17
        ['Mogul Red Carpet', ', Irving', 'Rain', 20, 100],
        //18
        ['Retirement Party', ', Euless', 'Rain', 40, 150]
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Events;