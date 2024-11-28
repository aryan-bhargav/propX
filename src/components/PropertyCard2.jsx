import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const PropertyCard = ({ property }) => {
  const message = `Hi, I'm interested in the property "${property.name}" located at ${property.location}. Could you provide more details?`;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700">
      {/* Image Section */}
      <Link to={`/property/${property.id}`}>
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img
            className="w-full h-full object-cover"
            src={property.image}
            alt={property.name}
          />
        </div>
      </Link>

      {/* Details Section */}
      <div className="px-5 pb-5">
        <Link to={`/property/${property.id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {property.name}
          </h5>
        </Link>

        {/* Location */}
        <p className="text-gray-500 mt-1">{property.location}</p>

        {/* Price */}
        <p className="text-lg font-bold text-gray-900 dark:text-white mt-2">
          ₹{property.price.toLocaleString('en-IN')}
        </p>

        {/* Buttons Section */}
        <div className="mt-4 flex space-x-2">
          <Link
            to={`/property/${property.id}`}
            className="flex-1 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
          </Link>

          <WhatsAppButton
            phoneNumber="9315409747"
            message={message}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
