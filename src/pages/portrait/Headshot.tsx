import ServicePage from "../../layouts/ServicePage.tsx";
import HeadshotGalleryWithStyles from "../../content/galleries/HeadshotGallery";
import ServiceHeader from "../../components/service/ServiceHeader.tsx";
import {head} from "../../content/services/portrait/headshot.ts";

const Headshot = () => {
        return (
            <ServicePage>
                <ServiceHeader {...head}/>
                <HeadshotGalleryWithStyles/>
            </ServicePage>
        );
}

export default Headshot;