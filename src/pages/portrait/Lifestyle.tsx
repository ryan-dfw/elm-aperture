import ServicePage from "../../layouts/ServicePage.tsx";
import LifestyleGalleryWithStyles from "../../content/galleries/LifestyleGallery.tsx";
import ServiceHeader from "../../components/service/ServiceHeader.tsx";
import {head} from "../../content/services/portrait/lifestyle.ts";

const Lifestyle = () => {
        return (
            <ServicePage>
                <ServiceHeader {...head}/>
                <LifestyleGalleryWithStyles/>
            </ServicePage>
        );
}

export default Lifestyle;