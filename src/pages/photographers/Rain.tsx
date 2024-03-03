import {useEffect} from "react";

const Rain = () => {
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
        <div className="embedsocial-wrapper">
            <div className="embedsocial-hashtag" data-ref="8384500192fa9438d90085d33cdda14329c0c3e4"></div>
        </div>
    );
}

export default Rain;