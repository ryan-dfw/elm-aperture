import './App.css';

import React, { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://embedsocial.com/cdn/ht.js';
        script.async = true;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div className="embedsocial-hashtag" data-ref="ee15b8a1b11a57118b3d7f3808f5783156c9669a"></div>
        </div>
    );
}

export default App;
