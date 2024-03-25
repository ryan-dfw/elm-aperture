import LightBox from "../Lightbox.tsx";

const Fashion = () => {
    const directory = 'portrait';
    const subDirectory = 'fashion';
    const details = [
        ['Anonymous Model', ' at Habitat Commons', 'Rain'],
        ['Demi', ' at Ambishen Studio', 'Rain'],
        ['Ella', ' at Lake White Rock', 'Rain'],
        ['Anonymous Model', ' at Habitat Commons', 'Rain'],
        ['Anonymous Model', ' at Habitat Commons', 'Rain'],
        ['Selia', ' at Fountain Square', 'Rain'],
        ['Lilian', ' at Ambishen Studio', 'Rain'],
        ['Thuan', ' at Downtown Fort Worth', 'Rain'],
        ['Alyssa', ' at Ambishen Studio', 'Rain'],
        ['Anonymous Model', ' at Habitat Commons', 'Rain'],
        ['filler image', '', 'no one'],
        ['filler image', '', 'no one'],
        ['Maivy', ' at the Arboretum', 'Rain'],
        ['filler image', '', 'no one'],
        ['filler image', '', 'no one'],
        ['filler image', '', 'no one'],
        ['filler image', '', 'no one'],
        ['filler image', '', 'no one']
    ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Fashion;