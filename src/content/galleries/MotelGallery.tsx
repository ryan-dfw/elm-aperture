import Gallery from "../../components/Gallery.tsx";

const Motel = () => {
    const directory = 'realestate';
    const subDirectory = 'motel';
    const layout = 'landscape';
    const details: [string, string, string, number, number][] = [
        ['River Valley Motor Inn', ', La Grange TX', 'Rain', 0, 0],         // 01
        ['Hotel Bliss', ', Kemah TX', 'Rain', 0, 0],                        // 02
        ['OYO', ', Corpus Christi TX', 'Rain', 0, 0],                       // 03
        ['Fairway Inn', ', La Porte TX', 'Rain', 0, 0],                     // 04
        ['Crown Inn', ', Denver City TX', 'Rain', 0, 0],                    // 05
        ['American Inn', ', Vernon TX', 'Rain', 0, 0],                      // 06
        ['Regency Inn', ', Bay City TX', 'Rain', 0, 0],                     // 07
        ['Plaza Motel', ', Corpus Christi TX', 'Rain', 0, 0],               // 08
        ['Vali Ho', ', Weslaco TX', 'Rain', 0, 0],                          // 09
        ['Moulton Inn', ', Moulton TX', 'Rain', 0, 0],                      // 10
        ['Castle Inn', ', Lawton OK', 'Rain', 0, 0],                        // 11
        ['River Valley Motor Inn', ', La Grange TX', 'Rain', 0, 0],         // 12
        ['Purple Sage', ', Snyder TX', 'Rain', 0, 0],                       // 13
        ['Executive Inn', ', Pleasanton TX', 'Rain', 0, 0],                 // 14
        ['Budget Inn', ', Corpus Christi TX', 'Rain', 0, 0],                // 15
        ['Texas Inn', ', San Benito TX', 'Rain', 0, 0],                     // 16
        ['Lone Star Inn', ', Harlingen TX', 'Rain', 0, 0],                  // 17
        ['Moulton Inn', ', Moulton TX', 'Rain', 0, 0]                       // 18
    ];

    return <Gallery directory={directory} subDirectory={subDirectory} layout={layout} details={details}/>;
};

export default Motel;