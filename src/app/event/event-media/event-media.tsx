'use client'
import React, { useState } from 'react';
// import './video-list.css'; // If needed for additional styles


interface Video {
    id: number;
    thumbnail: string;
    title: string;
    date: string;
    price: string;
}


const videoData: Video[] = [
    { id: 1, thumbnail: '/img_1.png', title: 'Purple Fitness - Day 3', date: '03/22/16 at 1:01 PM', price: '$10' },
    { id: 2, thumbnail: '/img_2.png', title: 'Purple Fitness - Day 2', date: '03/22/16 at 1:00 PM', price: '$10' },
    { id: 3, thumbnail: '/img_3.png', title: 'Purple Fitness - Day 1', date: '03/22/16 at 1:01 PM', price: '$10' },
    { id: 4, thumbnail: '/img_8.png', title: 'Purple Fitness - Day 4', date: '06/16/16 at 2:33 PM', price: '$10' },
];


const EventMedia: React.FC = () => {
    const [videos] = useState<Video[]>(videoData);


    return (
        <div>
            {/*<div className="mb-4">
                <input
                    type="text"
                    placeholder="Search videos"
                    className="p-2 border rounded w-full mb-4"
                />
            </div>*/}


            <div className="space-y-4">
                {videos.map((video) => (
                    <div key={video.id} className="flex items-center border-b-[1.5px] border-gray-200 py-4">
                        {/* Thumbnail */}
                        <div className="w-16 h-16">
                            <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full rounded" />
                        </div>


                        {/* Title & Date */}
                        <div className="ml-4 flex-grow">
                            <p className="text-lg font-semibold">{video.title}</p>
                            <p className="text-sm text-gray-500">{video.date}</p>
                        </div>


                        {/* Price */}
                        <div className="ml-4">
                            <p className="text-lg font-semibold">{video.price}</p>
                        </div>


                        {/* Buy Button */}
                        <div className="ml-4">
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                Buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default EventMedia;





