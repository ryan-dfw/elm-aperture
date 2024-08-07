import LightBox from "../../components/Lightbox.tsx";

const Wedding = () => {
    const directory = 'events';
    const subDirectory = 'wedding';
    const details: [string, string, string, number, number][] = [
        ['Palos Verdes', ', Wedding', 'Rain', 0, 80],
        ['Serene Lakeside', ', Wedding Party', 'Maivy', 0, -50],
        ['Palos Verdes', ', Wedding', 'Rain', 0, 30],
        ['Serene Lakeside', ', Wedding Portrait', 'Maivy', 0, 300],
        ['Mandalay Canal', ', Engagement', 'Rain', 0, 40],
        ['Japanese Garden', ', Wedding Ceremony', 'Rain', 30, 80],
        ['Japanese Garden', ', Wedding Portrait', 'Rain', 0, -30],
        ['Japanese Garden', ', Wedding Portrait', 'Rain', 0, 40],
        ['Garden Hall', ', Wedding Reception', 'Rain', 0, 20],
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 20, 30],
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 30, 40],
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain', 30, 110],
        ['Venue Nine-Twenty', ', Wedding Portrait', 'Rain', 30, 120],
        ['Thanksgiving Square', ', Family Photos', 'Rain', 20, 60],
        ['Thanksgiving Square', ', Wedding Portrait', 'Rain', 10, 100],
        ['Thanksgiving Square', ', Wedding Portrait', 'Rain', -40, -180],
        ['Pilgrim Rest Church', ', Wedding Ceremony', 'Maivy', 40, 100],
        ['Pilgrim Rest Church', ', Wedding Ceremony', 'Maivy', 10, 80]
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Wedding;