'use client';
import './service-card.css';
import {Avatar, Badge, Button, Card, Image, Text} from '@mantine/core';
import {IconEye, IconStar} from '@tabler/icons-react';

interface ServiceCardProps {
    service: {
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
    };
}

const callAPI = async () => {
    try {
        const res = await fetch(
            `http://localhost:3001/media`
        );
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

const ServiceCard: React.FC<ServiceCardProps> = ({service}) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className="service-card">
            <Card.Section>
                <Image
                    src={service.image}
                    height={160}
                    alt={service.title}
                />
            </Card.Section>

            <div className="service-details">
                <div className="service-header">
                    <div className="service-header-left">
                        <Avatar className="author-section img" src={service.authorAvatar} alt={service.author}
                                radius="xl" size="sm"/>
                        <Text className="author-name">{service.author}</Text>
                    </div>
                    <div className="service-header-right">
                        <div className="views-section">
                            <IconEye size={16}/>
                            <Text className="views">{service.views}k</Text>
                        </div>
                        {service.isNew && <Badge color="green" size="sm" className="new-badge">New</Badge>}
                    </div>
                </div>

                <Text className="title" fw={500} mt="xs" lineClamp={1}>
                    {service.title}
                </Text>

                <div className="rating-price-section">
                    <div className="rating-section">
                        <IconStar size={16} color="orange"/>
                        <Text className="rating">{service.rating} ({service.ratingCount})</Text>
                    </div>
                    <Text className="price-section">
                        Price {service.price}
                    </Text>
                    <Button className="buy-button">
                        Buy
                    </Button>
                </div>
            </div>
        </Card>
    );
}


export default ServiceCard;



