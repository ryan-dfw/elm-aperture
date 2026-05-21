import WeddingGalleryWithStyles from "../../content/galleries/WeddingGallery";
import ServicePage from "../../layouts/ServicePage.tsx";
import ServiceTextSection from "../../components/service/ServiceTextSection.tsx";
import {bridge, closing} from "../../content/services/events/wedding.ts";

const Wedding = () => {
        return (
            <ServicePage>
                <WeddingGalleryWithStyles/>
                <ServiceTextSection {...bridge} />
                <ServiceTextSection {...closing} />
            </ServicePage>
        );
}

export default Wedding;