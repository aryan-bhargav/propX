import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomImage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);

    // Unsplash API configuration
    const UNSPLASH_ACCESS_KEY = 'Wqoo1pAJXZ5ByEnoTkgsMW0tf40lF282thiALNsqxlg'; // Replace with your Unsplash Access Key

    const fetchRandomImage = async () => {
        try {
            const response = await axios.get(
                `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`
            );
            setImageUrl(response.data.urls.full);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching image from Unsplash', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomImage();
        const interval = setInterval(fetchRandomImage, 10000); // Fetch a new image every 30 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="w-full h-[50vh]">
            <img
                src={imageUrl}
                alt="Random from Unsplash"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default RandomImage;
