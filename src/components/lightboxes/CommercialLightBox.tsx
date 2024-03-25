import LightBox from "../Lightbox.tsx";

const Commercial = () => {
    const directory = 'realestate';
    const subDirectory = 'commercial';
    const details: [string, string, string, number, number][] = [
        ['The Mayfair', ', 3400 Welborn', 'Rain', 0, 0],
        ['Bleu Ciel', ', 3130 N Harwood', 'Rain', 0, 0],
        ['Highland Gates', ', 4602 Abbott', 'Rain', 0, 0],
        ['588 Lofts', ', 3110 Thomas', 'Rain', 0, 0],
        ['The Parks on Travis', ', 3901 Travis', 'Rain', 0, 0],
        ['HALL Arts', ', 1747 Leonard', 'Rain', 0, 0],
        ['Norcross Office', ' Interior', 'Rain', 0, 0],
        ['Norcross Office', ' Interior', 'Rain', 0, 0],
        ['Bryan Place V', ', 3105 San Jacinto', 'Rain', 0, 0],
        ['The Sorrento', ', 8616 Turtle Creek', 'Rain', 0, 0],
        ['New Construction', ', 1848 Euclid', 'Rain', 0, 0],
        ["The W", ', 2340 Victory', 'Rain', 0, 0],
        ['La Tour Condominiums', ', 3030 McKinney', 'Rain', 0, 0],
        ['New Construction', ', 3909 Hawthorne', 'Rain', 0, 0],
        ['Twenty One', ', 3883 Turtle Creek', 'Rain', 0, 0],
        ['The Stoneleigh', ', 2300 Wolf', 'Rain', 0, 0],
        ['Azure', ', 2900 McKinney', 'Rain', 0, 0],
        ['Bleu Ciel', ', 3130 N Harwood', 'Rain', 0, 0]];

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Commercial;