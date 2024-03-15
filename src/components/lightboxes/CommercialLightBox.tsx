import LightBox from "../Lightbox.tsx";

const Commercial = () => {
    const commercialDirectory = 'realestate';
    const commercialSubDirectory = 'commercial';
    const commercialDetails = [
        ['The Mayfair', ', 3400 Welborn', 'Rain'],
        ['Bleu Ciel', ', 3130 N Harwood', 'Rain'],
        ['Highland Gates', ', 4602 Abbott', 'Rain'],
        ['588 Lofts', ', 3110 Thomas', 'Rain'],
        ['The Parks on Travis', ', 3901 Travis', 'Rain'],
        ['HALL Arts', ', 1747 Leonard', 'Rain'],
        ['Norcross Office', ' Interior', 'Rain'],
        ['Norcross Office', ' Interior', 'Rain'],
        ['Bryan Place V', ', 3105 San Jacinto', 'Rain'],
        ['The Sorrento', ', 8616 Turtle Creek', 'Rain'],
        ['New Construction', ', 1848 Euclid', 'Rain'],
        ["The W", ', 2340 Victory', 'Rain'],
        ['La Tour Condominiums', ', 3030 McKinney', 'Rain'],
        ['New Construction', ', 3909 Hawthorne', 'Rain'],
        ['Twenty One', ', 3883 Turtle Creek', 'Rain'],
        ['The Stoneleigh', ', 2300 Wolf', 'Rain'],
        ['Azure', ', 2900 McKinney', 'Rain'],
        ['Bleu Ciel', ', 3130 N Harwood', 'Rain']];

    return <LightBox  directory={commercialDirectory} subDirectory={commercialSubDirectory} details={commercialDetails}/>;
};

export default Commercial;