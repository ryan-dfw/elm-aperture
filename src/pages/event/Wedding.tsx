import WeddingLightBoxWithStyles from "../../datasets/lightboxes/WeddingLightBox";

const Wedding = () => {
        return (
            <>
                <WeddingLightBoxWithStyles/>
                <div className={"portfolio-section-header"}>
                    <div className={"horizontal-line"}></div>
                    <h4>WEDDING VIDEOGRAPHY</h4>
                    <div className={"horizontal-line"}></div>
                </div>
                <div style={{margin: '50px'}}></div>
                <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                    <iframe className={"vimeo-profile-frame"}
                            src='https://vimeo.com/showcase/11121389/embed'
                            title="Rain Showcase" allowFullScreen
                    ></iframe>
                </div>
            </>
        );
}

export default Wedding;