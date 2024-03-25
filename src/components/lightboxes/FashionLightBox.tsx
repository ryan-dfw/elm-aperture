import LightBox from "../Lightbox.tsx";

const Fashion = () => {
    const directory: string = 'portrait';
    const subDirectory: string = 'fashion';
    const details: [string, string, string, number, number][] = [
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 100, 240],
        ['Demi', ' at Ambishen Studio', 'Rain', 0, 160],
        ['Ella', ' at Lake White Rock', 'Rain', 80, 240],
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 0, 200],
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 80, 200],
        ['Selia', ' at Fountain Square', 'Rain', 120, 320],
        ['Lilian', ' at Ambishen Studio', 'Rain', 80, 200],
        ['Thuan', ' at Downtown Fort Worth', 'Rain', 120, 260],
        ['Alyssa', ' at Ambishen Studio', 'Rain', 80, 200],
        ['Anonymous Model', ' at Habitat Commons', 'Rain', 140, 280],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['Maivy', ' at the Arboretum', 'Rain', 0, 40],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60],
        ['filler image', '', 'no one', 20, 60]
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Fashion;
