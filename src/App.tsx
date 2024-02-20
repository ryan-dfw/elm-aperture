import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Rain from './pages/Rain';
import Meraki from "./pages/Meraki.tsx";
import Brayln from "./pages/Brayln.tsx";

const App = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/rain" element={<Rain />} />
                    <Route path="/meraki" element={<Meraki />} />
                    <Route path="/brayln" element={<Brayln />} />
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
