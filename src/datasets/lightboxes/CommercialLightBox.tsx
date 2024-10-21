import LightBox from "../../components/Lightbox.tsx";

const Commercial = () => {
    const directory = 'realestate';
    const subDirectory = 'commercial';
    const details: [string, string, string, number, number][] = [
        ['The Mayfair', ', 3400 Welborn', 'Rain', 0, 0],                    // 01
        ['Bleu Ciel', ', 3130 N Harwood', 'Rain', 0, 0],                    // 02
        ['Highland Gates', ', 4602 Abbott', 'Rain', 0, 0],                  // 03
        ['588 Lofts', ', 3110 Thomas', 'Rain', 0, 0],                       // 04
        ['The Parks on Travis', ', 3901 Travis', 'Rain', 0, 0],             // 05
        ['HALL Arts', ', 1747 Leonard', 'Rain', 0, 0],                      // 06
        ['Norcross Office', ' Interior', 'Rain', 0, 0],                     // 07
        ['Norcross Office', ' Interior', 'Rain', 0, 0],                     // 08
        ['Bryan Place V', ', 3105 San Jacinto', 'Rain', 0, 0],              // 09
        ['The Sorrento', ', 8616 Turtle Creek', 'Rain', 0, 0],              // 10
        ['New Construction', ', 1848 Euclid', 'Rain', 0, 0],                // 11
        ["The W", ', 2340 Victory', 'Rain', 0, 0],                          // 12
        ['La Tour Condominiums', ', 3030 McKinney', 'Rain', 0, 0],          // 13
        ['New Construction', ', 3909 Hawthorne', 'Rain', 0, 0],             // 14
        ['Twenty One', ', 3883 Turtle Creek', 'Rain', 0, 0],                // 15
        ['The Stoneleigh', ', 2300 Wolf', 'Rain', 0, 0],                    // 16
        ['Azure', ', 2900 McKinney', 'Rain', 0, 0],                         // 17
        ['Bleu Ciel', ', 3130 N Harwood', 'Rain', 0, 0]];                   // 18

    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Commercial;