import ServicePage from "../../layouts/ServicePage.tsx";
import ProfessionalGalleryWithStyles from "../../content/galleries/ProfessionalGallery";
import ServiceHeader from "../../components/service/ServiceHeader.tsx";
import {head} from "../../content/services/portrait/professional.ts";

const Professional = () => {
        return (
            <ServicePage>
                <ServiceHeader {...head}/>
                <ProfessionalGalleryWithStyles/>
            </ServicePage>
        );
}

export default Professional;