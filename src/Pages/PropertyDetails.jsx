import React from "react";
import { useParams } from "react-router-dom";
import properties from "../Data/Properties";

const PropertyDetails = () => {
    const { id } = useParams(); // Get the property ID from the route
    const property = properties.find((p) => p.id === parseInt(id));

    if (!property) {
        return <h1 className="text-center mt-10 text-2xl font-bold">Property Not Found</h1>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
            <img
                src={property.image}
                alt={property.name}
                className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
            <p className="text-gray-600 mb-4">{property.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <p><strong>Type:</strong> {property.type}</p>
                <p><strong>Location:</strong> {property.location}</p>
                <p><strong>Price:</strong> ₹{property.price.toLocaleString()}</p>
                <p><strong>Area:</strong> {property.area}</p>
                <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
            </div>

            <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
            <ul className="list-disc ml-6">
                {property.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                ))}
            </ul>

            <button
                className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => alert(`Contact agent for ${property.name}`)}
            >
                Contact Agent
            </button>
        </div>
    );
};

export default PropertyDetails;