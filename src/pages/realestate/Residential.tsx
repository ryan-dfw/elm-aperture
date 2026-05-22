import ServicePage from "../../layouts/ServicePage.tsx";
import ResidentialGalleryWithStyles from "../../content/galleries/ResidentialGallery";
import ServiceHeader from "../../components/service/ServiceHeader.tsx";
import {head} from "../../content/services/realestate/residential.ts";

const Residential = () => {
        return (
            <ServicePage>
                <ServiceHeader {...head}/>
                <ResidentialGalleryWithStyles />
            </ServicePage>
        );
}

export default Residential;