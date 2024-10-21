import LightBox from "../../components/Lightbox.tsx";

const Residential = () => {
    const directory = 'realestate';
    const subDirectory = 'residential';
    const details: [string, string, string, number, number][] = [
        ['Living Room','','Rain', 0, 0],                                    // 01
        ['Living Room','','Rain', 0, 0],                                    // 02
        ['Furniture Detail','','Rain', 0, 0],                               // 03
        ['Furniture Detail','','Rain', 0, 0],                               // 04
        ['Furniture Detail','','Rain', 0, 0],                               // 05
        ['Main Bed','','Rain', 0, 0],                                       // 06
        ['Main Bed','','Rain', 0, 0],                                       // 07
        ['Main Bath','','Rain', 0, 0],                                      // 08
        ['Bath Detail','','Rain', 0, 0],                                    // 09
        ['Bath Detail','','Rain', 0, 0],                                    // 10
        ['Kitchen','','Rain', 0, 0],                                        // 11
        ['Kitchen','','Rain', 0, 0],                                        // 12
        ['Main Bath','','Rain', 0, 0],                                      // 13
        ['Kitchen Detail','','Rain', 0, 0],                                 // 14
        ['Kitchen Detail','','Rain', 0, 0],                                 // 15
        ['Gym','','Rain', 0, 0],                                            // 16
        ['Patio','','Rain', 0, 0],                                          // 17
        ['Patio Detail','','Rain', 0, 0],                                   // 18
        ];
    return <LightBox  directory={directory} subDirectory={subDirectory} details={details}/>;
};

export default Residential;