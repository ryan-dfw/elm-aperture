import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './contexts/Context.tsx';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Rain from './pages/photographers/Rain.tsx';
import Scott from './pages/photographers/Scott.tsx';
import Maivy from './pages/photographers/Maivy.tsx';
import Meraki from './pages/photographers/Meraki.tsx'
import Commercial from './pages/realestate/Commercial.tsx';
import Hotel from './pages/realestate/Hotel.tsx';
import Residential from './pages/realestate/Residential.tsx';
import Wedding from './pages/event/Wedding.tsx';
import Events from './pages/event/Events.tsx';
import Headshot from './pages/portrait/Headshot.tsx';
import Professional from './pages/portrait/Professional.tsx';
import Lifestyle from './pages/portrait/Lifestyle.tsx'

const App: React.FC = () => {
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            let startX: number;

            const handleTouchStart = (event: TouchEvent) => {
                startX = event.touches[0].clientX;
            };

            const handleTouchEnd = (event: TouchEvent) => {
                const endX = event.changedTouches[0].clientX;
                const diffX = endX - startX;
                if (Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        const leftKeyPressEvent = new KeyboardEvent(
                            'keydown', { key: 'ArrowLeft' }
                        );
                        document.dispatchEvent(leftKeyPressEvent);
                    } else {
                        const rightKeyPressEvent = new KeyboardEvent(
                            'keydown', { key: 'ArrowRight' }
                        );
                        document.dispatchEvent(rightKeyPressEvent);
                    }
                }
            };

            document.addEventListener('touchstart', handleTouchStart);
            document.addEventListener('touchend', handleTouchEnd);

            return () => {
                document.removeEventListener('touchstart', handleTouchStart);
                document.removeEventListener('touchend', handleTouchEnd);
            };
        }
    }, []);

    return (
        <Router>
            <ContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/headshot" element={<Headshot />} />
                    <Route path="/professional" element={<Professional />} />
                    <Route path="/lifestyle" element={<Lifestyle />} />
                    <Route path="/commercial" element={<Commercial />} />
                    <Route path="/hotel" element={<Hotel />} />
                    <Route path="/residential" element={<Residential />} />
                    <Route path="/wedding" element={<Wedding />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/rain" element={<Rain />} />
                    <Route path="/scott" element={<Scott />} />
                    <Route path="/maivy" element={<Maivy />} />
                    <Route path="/meraki" element={<Meraki />} />
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </ContextProvider>
        </Router>
    );
}

export default App;
