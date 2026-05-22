import ServicePage from "../../layouts/ServicePage.tsx";
import EventsGalleryWithStyles from "../../content/galleries/EventsGallery";
import ServiceHeader from "../../components/service/ServiceHeader.tsx";
import {head} from "../../content/services/events/events.ts";

const Events = () => {
        return (
            <ServicePage>
                <ServiceHeader {...head}/>
                <EventsGalleryWithStyles/>
            </ServicePage>
        );
}

export default Events;