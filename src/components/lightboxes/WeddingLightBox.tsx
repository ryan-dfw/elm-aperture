import LightBox from "../Lightbox.tsx";

const Wedding = () => {
    const directory = 'events';
    const subDirectory = 'wedding';
    const details = [
        ['Palos Verdes', ', Wedding', 'Rain'],
        ['Serene Lakeside', ', Wedding Party', 'Maivy'],
        ['Palos Verdes', ', Wedding', 'Rain'],
        ['Serene Lakeside', ', Wedding Portrait', 'Maivy'],
        ['Mandalay Canal', ', Engagement', 'Rain'],
        ['Japanese Garden', ', Wedding Ceremony', 'Rain'],
        ['Japanese Garden', ', Wedding Portrait', 'Rain'],
        ['Japanese Garden', ', Wedding Portrait', 'Rain'],
        ['Garden Hall', ', Wedding Reception', 'Rain'],
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain'],
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain'],
        ['Thanksgiving Square', ', Wedding Ceremony', 'Rain'],
        ['Venue Nine-Twenty', ', Wedding Portrait', 'Rain'],
        ['Thanksgiving Square', ', Family Photos', 'Rain'],
        ['Thanksgiving Square', ', Wedding Portrait', 'Rain'],
        ['Thanksgiving Square', ', Wedding Portrait', 'Rain'],
        ['Pilgrim Rest Church', ', Wedding Ceremony', 'Maivy'],
        ['Pilgrim Rest Church', ', Wedding Ceremony', 'Maivy']
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Wedding;