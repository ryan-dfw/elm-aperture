import ServicePage from "../../layouts/ServicePage";
import HotelGalleryWithStyles from "../../content/galleries/HotelGallery";
import ServiceTextSection from "../../components/service/ServiceTextSection.tsx";
import CaseStudyPreview from "../../components/service/CaseStudyPreview.tsx";
import ImageWithTitle from "../../components/service/ImageWithTitle.tsx";

import {
    bridge,
    caseStudies,
    mapImage,
    closing,
} from "../../content/services/realestate/hotel.ts";
import "../../styles/service/ServiceSections.css";

const Hotel = () => {

    return (
        <ServicePage>
            <HotelGalleryWithStyles />
            <ServiceTextSection {...bridge} />
            <CaseStudyPreview {...caseStudies.holidayInnExpress} />
            <ImageWithTitle {...mapImage} />
            <ServiceTextSection {...closing} />
        </ServicePage>
    );
};

export default Hotel;