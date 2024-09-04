'use client';
import './service-grid.css';
import ServiceCard from '@/app/service-card/service-card';
import React, { useState, useEffect } from 'react';

const ServiceGrid: React.FC = () => {
    const [cardData, setCardData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3001/media');
                const data = await res.json();
                setCardData(data);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="service-grid">
            {cardData.map(service => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </section>
    );
}

export default ServiceGrid;



