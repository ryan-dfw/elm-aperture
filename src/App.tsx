import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ContextProvider} from "./contexts/Context.tsx";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Rain from './pages/photographers/Rain.tsx';
import Maivy from "./pages/photographers/Maivy.tsx";
import Commercial from "./pages/realestate/Commercial.tsx";
import Hotel from "./pages/realestate/Hotel.tsx";
import Residential from "./pages/realestate/Residential.tsx";
import Professional from "./pages/portrait/Professional.tsx";
import Headshot from "./pages/portrait/Headshot.tsx";
import Fashion from "./pages/portrait/Fashion.tsx";
import Wedding from "./pages/event/Wedding.tsx";
import Events from "./pages/event/Events.tsx";

const App = () => {
    return (
        <Router>
            <ContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/headshot" element={<Headshot />} />
                    <Route path="/professional" element={<Professional />} />
                    <Route path="/fashion" element={<Fashion />} />
                    <Route path="/commercial" element={<Commercial />} />
                    <Route path="/hotel" element={<Hotel />} />
                    <Route path="/residential" element={<Residential />} />
                    <Route path="/wedding" element={<Wedding />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/rain" element={<Rain />} />
                    <Route path="/maivy" element={<Maivy />} />
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </ContextProvider>
        </Router>
    );
}

export default App;
