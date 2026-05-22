import ServicePage from "../../layouts/ServicePage.tsx";
import MotelGalleryWithStyles from "../../content/galleries/MotelGallery";
import ServiceTextSection from "../../components/service/ServiceTextSection.tsx";
import CaseStudyPreview from "../../components/service/CaseStudyPreview.tsx";
import ImageWithTitle from "../../components/service/ImageWithTitle.tsx";
import "../../styles/service/ServiceSections.css"

import {
    head,
    bridge,
    caseStudies,
    mapImage,
    closing,
} from "../../content/services/realestate/motel.ts";
import ServiceHeader from "../../components/service/ServiceHeader.tsx";

const Motel = () => {

    return (
        <ServicePage>
            <ServiceHeader {...head}/>
            <MotelGalleryWithStyles />
            <ServiceTextSection {...bridge} />
            <CaseStudyPreview {...caseStudies.riverValleyInn} />
            <ImageWithTitle {...mapImage} />
            <ServiceTextSection {...closing} />
        </ServicePage>
    );
};

export default Motel;
