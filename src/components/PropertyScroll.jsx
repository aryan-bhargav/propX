import React from 'react';
import { Link } from 'react-router-dom';
import properties from '../Data/Properties';

const PropertyScroll = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap space-x-4 flex px-4">
      {properties.map((property) => (
        <div
          key={property.id}
          className="inline-block bg-white rounded-lg shadow-md p-4 w-64"
        >
          <img
            src={property.image}
            alt={property.name}
            className="h-40 w-full object-cover rounded-t-md"
          />
          <h3 className="font-semibold text-lg mt-2">{property.name}</h3>
          <p className="text-gray-500">{property.location}</p>
          <p className="font-bold text-blue-600 mt-1">₹{property.price}</p>
          <Link
            to={`/property/${property.id}`}
            className="block mt-3 text-blue-600 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PropertyScroll;
