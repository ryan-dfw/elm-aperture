import { Route, Routes } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Rain from '../pages/photographers/Rain';
import Maivy from '../pages/photographers/Maivy';
import Alejandro from '../pages/photographers/Alejandro';
import Commercial from '../pages/realestate/Commercial';
import Hotel from '../pages/realestate/Hotel';
import Residential from '../pages/realestate/Residential';
import Wedding from '../pages/event/Wedding';
import Events from '../pages/event/Events';
import Headshot from '../pages/portrait/Headshot';
import Professional from '../pages/portrait/Professional';
import Lifestyle from '../pages/portrait/Lifestyle';
import Booking from '../pages/Booking';
import RainCal from '../pages/calendars/RainCal.tsx';
import Motel from '../pages/realestate/Motel';
import MotelFullGallery from '../content/galleries/full/MotelFullGallery';
import HotelFullGallery from "../content/galleries/full/HotelFullGallery.tsx";

const AppRoutes = () => (
    <Routes>
        <Route path="/booking" element={<Booking />} />
        <Route path="/headshot" element={<Headshot />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotel-full" element={<HotelFullGallery />} />
        <Route path="/motel" element={<Motel />} />
        <Route path="/motel-full" element={<MotelFullGallery />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rain" element={<Rain />} />
        <Route path="/maivy" element={<Maivy />} />
        <Route path="/alejandro" element={<Alejandro />} />
        <Route path="/raincal" element={<RainCal />} />
        <Route path="/" element={<Homepage />} />
    </Routes>
);

export default AppRoutes;