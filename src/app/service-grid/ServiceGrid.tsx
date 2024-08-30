import './ServiceGrid.css';
import ServiceCard from '@/app/service-card/ServiceCard';


interface Service {
    id: number;
    title: string;
    image: string;
    price: string;
    isNew: boolean;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_3.png', // Replace with actual image URLs
        price: '$5',
        isNew: true,
    },
    {
        id: 2,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_1.png',
        price: '$5',
        isNew: true,
    },
    {
        id: 3,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_2.png',
        price: '$5',
        isNew: true,
    },{
        id: 4,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_2.png',
        price: '$5',
        isNew: true,
    },
    {
        id: 5,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_3.png', // Replace with actual image URLs
        price: '$5',
        isNew: true,
    },
    {
        id: 6,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_1.png',
        price: '$5',
        isNew: true,
    },

    // Add more services as needed
];

const ServiceGrid: React.FC = () => {
    return (
        <section className="service-grid">
            {services.map(service => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </section>
    );
}

export default ServiceGrid;