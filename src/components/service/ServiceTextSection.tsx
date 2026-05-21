type ServiceBridgeProps = {
    heading: string;
    body: string;
};

const ServiceTextSection = ({
                           heading,
                           body,
                       }: ServiceBridgeProps) => {
    return (
        <div className="service-bridge">
            <div className="service-section-heading">
                <div className="horizontal-line" />
                <h3>{heading}</h3>
                <div className="horizontal-line" />
            </div>

            <p>{body}</p>
        </div>
    );
};

export default ServiceTextSection;