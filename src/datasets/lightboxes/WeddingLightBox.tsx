import LightBox from "../../components/Lightbox.tsx";

const Wedding = () => {
    const directory = 'events';
    const subDirectory = 'wedding';
    const details: [string, string, string, number, number][] = [
        ['Palos Verdes', ', Wedding', 'Rain', 0, 80],                       // 01
        ['Serene Lakeside', ', Wedding Party', 'Maivy', 0, -50],            // 02
        ['Palos Verdes', ', Wedding', 'Rain', 0, 30],                       // 03
        ['Serene Lakeside', ', Wedding Portrait', 'Maivy', 0, 300],         // 04
        ['Mandalay Canal', ', Engagement', 'Rain', 0, 40],                  // 05
        ['Japanese Garden', ', Wedding Ceremony', 'Rain', 30, 80],          // 06
        ['Japanese Garden', ', Wedding Portrait', 'Rain', 0, -30],          // 07
        ['Japanese Garden', ', Wedding Portrait', 'Rain', 0, 40],           // 08
        ['Garden Hall', ', Wedding Reception', 'Rain', 0, 20],              // 09
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 20, 30],      // 10
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 30, 40],      // 11
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 30, 110],     // 12
        ['Venue Nine-Twenty', ', Wedding Portrait', 'Rain', 30, 120],       // 13
        ['Thanksgiving Square', ', Family Photos', 'Rain', 20, 60],         // 14
        ['Thanksgiving Square', ', Wedding Portrait', 'Rain', 10, 100],     // 15
        ['Thanksgiving Square', ', Wedding Portrait', 'Rain', -40, -180],   // 16
        ['Pilgrim Rest Church', ', Wedding Ceremony', 'Maivy', 40, 100],    // 17
        ['Pilgrim Rest Church', ', Wedding Ceremony', 'Maivy', 10, 80]      // 18
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Wedding;