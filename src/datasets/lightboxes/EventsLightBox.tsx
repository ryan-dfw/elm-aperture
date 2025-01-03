import LightBox from "../../components/Lightbox.tsx";

const Events = () => {
    const directory = 'events';
    const subDirectory = 'events';
    const details: [string, string, string, number, number][] = [
        ['Company Meeting', ', Fort Worth', 'Maivy', -30, 0],               // 01
        ['Oil Rig Visit', ', West Texas', 'Rain', 0, 0],                    // 02
        ['Site Inspection', ', West Texas', 'Maivy', 0, 0],                 // 03
        ['Guided Tour', ', Dallas', 'Rain', 0, 0],                          // 04
        ['Graduation Party', ', Irving', 'Maivy', 0, 0],                    // 05
        ['Graduation Party', ', Irving', 'Rain', 10, 0],                    // 06
        ['Mai Colachi', ', Carrollton', 'Rain', 0, 0],                      // 07
        ['Botswana Independence Day', ', Argyle', 'Rain', 10, 0],           // 08
        ['Botswana Independence Day', ', Argyle', 'Rain', 0, 0],            // 09
        ['Roots Remain', ", Big Rob's", 'Maivy', 10, 0],                    // 10
        ['Roots Remain', ", Big Rob's", 'Rain', 10, 0],                     // 11
        ['Eshtadur', ", Big Rob's", 'Maivy', 10, 0],                        // 12
        ['Mogul Red Carpet', ', Irving', 'Maivy', 10, 0],                   // 13
        ['Rooftop Birthday', ', Dallas', 'Rain', 10, 0],                    // 14
        ['Mogul Red Carpet', ', Irving', 'Rain', 30, 0],                    // 15
        ['Engagement Party', ', Mi Cocina', 'Rain', 30, 0],                 // 16
        ['Mogul Red Carpet', ', Irving', 'Rain', 20, 0],                    // 17
        ['Retirement Party', ', Euless', 'Rain', 40, 0]                     // 18
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Events;