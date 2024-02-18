// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Rain from './pages/Rain';

const App = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/rain" element={<Rain />} />
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
