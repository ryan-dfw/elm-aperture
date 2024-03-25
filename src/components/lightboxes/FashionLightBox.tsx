import LightBox from "../Lightbox.tsx";

const Fashion = () => {
    const directory = 'portrait';
    const subDirectory = 'fashion';
    const details = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Fashion;