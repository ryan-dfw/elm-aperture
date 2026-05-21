import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './contexts/Context';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
            return;
        }

        let startX: number;

        const handleTouchStart = (event: TouchEvent) => {
            startX = event.touches[0].clientX;
        };

        const handleTouchEnd = (event: TouchEvent) => {
            const endX = event.changedTouches[0].clientX;
            const diffX = endX - startX;

            if (Math.abs(diffX) <= 50) {
                return;
            }

            const key = diffX > 0 ? 'ArrowLeft' : 'ArrowRight';
            document.dispatchEvent(new KeyboardEvent('keydown', { key }));
        };

        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <Router>
            <ContextProvider>
                <Navbar />
                <AppRoutes />
            </ContextProvider>
        </Router>
    );
};

export default App;