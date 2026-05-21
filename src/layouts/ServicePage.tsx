import { useEffect } from 'react';
import BookingButton from '../components/BookingButton.tsx';

type ServicePageProps = {
    children: React.ReactNode;
};

const ServicePage = ({
                         children,
                     }: ServicePageProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="service-page">
            {children}
            <BookingButton />
        </main>
    );
};

export default ServicePage;