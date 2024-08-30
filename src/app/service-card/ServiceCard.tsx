import './ServiceCard.css'

interface ServiceCardProps {
    service: {
        id: number;
        title: string;
        image: string;
        price: string;
        isNew: boolean;
    };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {

    return (
        <div className="service-card">
            <img src={service.image} alt={service.title}/>
            <div className="service-details">
                <h4>{service.title}</h4>
                <div className="price-new">
                    <span className="price">{service.price}</span>
                    {service.isNew && <span className="new">New</span>}
                </div>
            </div>
        </div>

    );
}

export default ServiceCard;

