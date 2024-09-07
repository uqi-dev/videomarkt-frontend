'use client';
import './service-card.css';
import {Avatar, Badge, Button, Card, Image, Text} from '@mantine/core';
import {IconEye, IconStar} from '@tabler/icons-react';
import Link from "next/link";

interface ServiceCardProps {
    service: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({service}) => {
    return (

        <Card shadow="sm" padding="lg" radius="md" withBorder className="service-card">
            <Link href={`/media-details/${service.id}`} passHref>
                <Card.Section>
                    <Image
                        src={service.thumbnail}
                        height={160}
                        alt={service.title}
                    />
                </Card.Section>
            </Link>

            <div className="service-details">
                <div className="service-header">
                    <div className="service-header-left">
                        <Avatar className="author-section img" src={service.thumbnail}
                                alt={service.organization.name}
                                radius="xl" size="sm"/>
                        <Text className="author-name">{service.organization.users[0].firstName}</Text>
                    </div>
                    <div className="service-header-right">
                        <div className="views-section">
                            <IconEye size={16}/>
                            <Text className="views">25k</Text>
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
                        <Text className="rating">4 (30)</Text>
                    </div>
                    <Text className="price-section">
                        Price ${service.price}
                    </Text>
                    <Link href={`/payment/${service.id}`} passHref>
                        <Button className="buy-button">
                            Buy
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>

    );
}


export default ServiceCard;



