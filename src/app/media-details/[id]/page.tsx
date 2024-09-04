'use client'

import { useEffect, useState } from 'react';
import './media-details.css';
import { useParams, useRouter } from "next/navigation";
import ServiceGrid from "@/app/service-grid/service-grid";
import Header from "@/app/header/header";


const MediaDetails: React.FC = () => {
    const router = useRouter();
    const { id } = useParams();
    const [service, setService] = useState<any>(null);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/media/${id}`)
                .then((res) => res.json())
                .then((data) => setService(data))
                .catch((err) => console.error(err));
        }
    }, [id]);

    if (!service) {
        return <p>Loading...</p>;
    }

    return (
        <div className="service-details-container">
            <div>
                <Header />
            </div>
            <div className="service-details-content">
                <div className="service-image">
                    <img src={service.thumbnail} alt={service.title}/>
                </div>

                <div className="service-info">
                    <h1>{service.title}</h1>
                    <p>{service.description}</p>
                    <div className="service-attributes">
                        <p><strong>Price:</strong> ${service.price}</p>
                        <p><strong>Resolution:</strong> {service.resolution}</p>
                        <p><strong>Length:</strong> {service.length}</p>
                        <p><strong>File Size:</strong> {service.fileSize}</p>
                        <button className="buy-button">Buy for ${service.price}</button>
                    </div>
                </div>
            </div>

            <div className="related-services">
                <h3>You may like more options</h3>
                <ServiceGrid/>
            </div>
        </div>
    );
};

export default MediaDetails;



