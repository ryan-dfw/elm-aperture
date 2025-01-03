import LightBox from "../../components/Lightbox.tsx";

const Wedding = () => {
    const directory = 'events';
    const subDirectory = 'wedding';
    const details: [string, string, string, number, number][] = [
        ['Palos Verdes', ', Wedding', 'Rain', 0, 0],                        // 01
        ['The Springs', ', Wedding Portraits', 'Rain', 0, 0],               // 02
        ['Serene Lakeside', ', Wedding Party', 'Maivy', 0, 0],              // 03
        ['Serene Lakeside', ', Wedding Portrait', 'Maivy', 0, 0],           // 04
        ['Mandalay Canal', ', Engagement', 'Rain', 0, 0],                   // 05
        ['Japanese Garden', ', Wedding Ceremony', 'Rain', 30, 0],           // 06
        ['Japanese Garden', ', Wedding Portrait', 'Rain', 0, 0],            // 07
        ['Japanese Garden', ', Wedding Portrait', 'Rain', 0, 0],            // 08
        ['Garden Hall', ', Wedding Reception', 'Rain', 0, 0],               // 09
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 20, 0],       // 10
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 30, 0],       // 11
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 30, 0],       // 12
        ['Venue Nine-Twenty', ', Wedding Portrait', 'Rain', 30, 0],         // 13
        ['Thanksgiving Square', ', Family Photos', 'Rain', 20, 0],          // 14
        ['Thanksgiving Square', ', Wedding Portrait', 'Rain', 10, 0],       // 15
        ['Thanksgiving Square', ', Wedding Portrait', 'Rain', -40, 0],      // 16
        ['Pilgrim Rest Church', ', Wedding Ceremony', 'Maivy', 40, 0],      // 17
        ['Pilgrim Rest Church', ', Wedding Ceremony', 'Maivy', 10, 0]       // 18
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Wedding;