import './service-grid.css';
import ServiceCard from '@/app/service-card/service-card';


interface Service {
    id: number;
    title: string;
    image: string;
    price: string;
    isNew: boolean;
    views: number;
    rating: number;
    ratingCount: number;
    author: string;
    authorAvatar: string;

}

const services: Service[] = [
    {
        id: 1,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj Ani Choying, Farah Siraj',
        image: '/img_3.png', // Replace with actual image URLs
        price: '$130',
        isNew: true,
        views: 150,
        rating: 4,
        ratingCount: 20,
        author: 'Zahid',
        authorAvatar: '/img_3.png',
    },
    {
        id: 2,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_1.png',
        price: '$150',
        isNew: true,
        views: 150,
        rating: 4,
        ratingCount: 20,
        author: 'Zahid',
        authorAvatar: '/img_1.png',
    },
    {
        id: 3,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_2.png',
        price: '$180',
        isNew: true,
        views: 150,
        rating: 4,
        ratingCount: 20,
        author: 'Zahid',
        authorAvatar: '/img_2.png',
    },{
        id: 4,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_1.png',
        price: '$200',
        isNew: true,
        views: 150,
        rating: 4,
        ratingCount: 20,
        author: 'Zahid',
        authorAvatar: '/img_1.png',
    },
    {
        id: 5,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_2.png', // Replace with actual image URLs
        price: '$150',
        isNew: true,
        views: 150,
        rating: 4,
        ratingCount: 20,
        author: 'Zahid',
        authorAvatar: '/img_2.png',
    },
    {
        id: 6,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_1.png',
        price: '$180',
        isNew: true,
        views: 150,
        rating: 4,
        ratingCount: 20,
        author: 'Zahid',
        authorAvatar: '/img_1.png',
    },
    {
        id: 7,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_3.png',
        price: '$180',
        isNew: true,
        views: 150,
        rating: 4,
        ratingCount: 20,
        author: 'Zahid',
        authorAvatar: '/img_3.png',
    },
    {
        id: 8,
        title: 'Zariya - AR Rahman, Ani Choying, Farah Siraj',
        image: '/img_2.png',
        price: '$180',
        isNew: true,
        views: 150,
        rating: 4,
        ratingCount: 20,
        author: 'Zahid',
        authorAvatar: '/img_2.png',
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