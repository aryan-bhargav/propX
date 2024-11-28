// src/components/PropertyCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-semibold">{property.name}</h3>
      <p className="text-gray-500">{property.location}</p>
      <p className="text-lg font-bold mt-2">₹{property.price}</p>
      <Link
        to={`/property/${property.id}`}
        className="text-blue-600 hover:underline mt-2 block"
      >
        View Details
      </Link>
    </div>
  );
};

export default PropertyCard;
