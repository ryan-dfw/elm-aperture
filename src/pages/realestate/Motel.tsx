import ServicePage from "../../layouts/ServicePage.tsx";
import MotelGalleryWithStyles from "../../content/galleries/MotelGallery";
import ServiceTextSection from "../../components/service/ServiceTextSection.tsx";
import CaseStudyPreview from "../../components/service/CaseStudyPreview.tsx";
import ImageWithTitle from "../../components/service/ImageWithTitle.tsx";
import "../../styles/ServiceSections.css"

import {
    bridge,
    caseStudies,
    mapImage,
    closing,
} from "../../content/services/realestate/motel.ts";

const Motel = () => {

    return (
        <ServicePage>
            <MotelGalleryWithStyles />
            <ServiceTextSection {...bridge} />
            <CaseStudyPreview {...caseStudies.riverValleyInn} />
            <ImageWithTitle {...mapImage} />
            <ServiceTextSection {...closing} />
        </ServicePage>
    );
};

export default Motel;
