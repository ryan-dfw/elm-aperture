import ServicePage from "../../layouts/ServicePage.tsx";
import CommercialGalleryWithStyles from "../../content/galleries/CommercialGallery";
import ServiceHeader from "../../components/service/ServiceHeader.tsx";
import {head} from "../../content/services/realestate/commercial.ts";

const Commercial = () => {
        return (
            <ServicePage>
                <ServiceHeader {...head}/>
                <CommercialGalleryWithStyles/>
            </ServicePage>
        );
}

export default Commercial;
