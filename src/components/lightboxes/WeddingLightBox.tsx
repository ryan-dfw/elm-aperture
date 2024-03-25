import LightBox from "../Lightbox.tsx";

const Wedding = () => {
    const directory = 'events';
    const subDirectory = 'wedding';
    const details: [string, string, string, number, number][] = [
        ['Palos Verdes', ', Wedding', 'Rain', 0, 0],
        ['Serene Lakeside', ', Wedding Party', 'Maivy', 0, 0],
        ['Palos Verdes', ', Wedding', 'Rain', 0, 0],
        ['Serene Lakeside', ', Wedding Portrait', 'Maivy', 0, 0],
        ['Mandalay Canal', ', Engagement', 'Rain', 0, 0],
        ['Japanese Garden', ', Wedding Ceremony', 'Rain', 0, 0],
        ['Japanese Garden', ', Wedding Portrait', 'Rain', 0, 0],
        ['Japanese Garden', ', Wedding Portrait', 'Rain', 0, 0],
        ['Garden Hall', ', Wedding Reception', 'Rain', 0, 0],
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 0, 0],
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 0, 0],
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 0, 0],
        ['Venue Nine-Twenty', ', Wedding Portrait', 'Rain', 0, 0],
        ['Thanksgiving Square', ', Family Photos', 'Rain', 0, 0],
        ['Thanksgiving Square', ', Wedding Portrait', 'Rain', 0, 0],
        ['Thanksgiving Square', ', Wedding Portrait', 'Rain', 0, 0],
        ['Pilgrim Rest Church', ', Wedding Ceremony', 'Maivy', 0, 0],
        ['Pilgrim Rest Church', ', Wedding Ceremony', 'Maivy', 0, 0]
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Wedding;