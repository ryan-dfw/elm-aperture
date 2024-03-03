import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Rain from './pages/photographers/Rain.tsx';
import Meraki from "./pages/photographers/Meraki.tsx";
import Brayln from "./pages/photographers/Brayln.tsx";
import Commercial from "./pages/realestate/Commercial.tsx";
import Hotel from "./pages/realestate/Hotel.tsx";
import Residential from "./pages/realestate/Residential.tsx";

const App = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/rain" element={<Rain />} />
                    <Route path="/meraki" element={<Meraki />} />
                    <Route path="/brayln" element={<Brayln />} />
                    <Route path="/commercial" element={<Commercial />} />
                    <Route path="/hotel" element={<Hotel />} />
                    <Route path="/residential" element={<Residential />} />
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
