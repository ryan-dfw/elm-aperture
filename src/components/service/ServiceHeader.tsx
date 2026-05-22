import { useEffect, useState } from 'react';

interface ServiceHeaderProps {
    title: string;
    subtitle: string;
}

const ServiceHeader = ({
                           title,
                           subtitle,
                       }: ServiceHeaderProps) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isDesktop) {
        return null;
    }

    return (
        <header className="service-header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
};

export default ServiceHeader;