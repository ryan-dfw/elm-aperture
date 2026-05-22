import WeddingGalleryWithStyles from "../../content/galleries/WeddingGallery";
import ServicePage from "../../layouts/ServicePage.tsx";
import ServiceTextSection from "../../components/service/ServiceTextSection.tsx";
import ServiceHeader from "../../components/service/ServiceHeader.tsx";
import {head, bridge, closing} from "../../content/services/events/wedding.ts";

const Wedding = () => {
        return (
            <ServicePage>
                <ServiceHeader {...head}/>
                <WeddingGalleryWithStyles/>
                <ServiceTextSection {...bridge} />
                <ServiceTextSection {...closing} />
            </ServicePage>
        );
}

export default Wedding;