// src/pages/PropertyListing.jsx

import React, { useState, useEffect } from 'react';
import PropertyCard2 from '../components/PropertyCard2'; // Component for displaying individual properties
import properties from '../Data/Properties'; // Import properties data

const PropertyListing = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 10000000,
    location: '',
    type: '',
  });

  useEffect(() => {
    // Apply filter logic
    const filtered = properties.filter((property) => {
      const isPriceValid =
        property.price >= filter.minPrice && property.price <= filter.maxPrice;
      const isLocationValid = filter.location ? property.location.includes(filter.location) : true;
      const isTypeValid = filter.type ? property.type === filter.type : true;
      return isPriceValid && isLocationValid && isTypeValid;
    });
    setFilteredProperties(filtered);
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-screen-xl px-4 container mx-auto ">
      <h2 className="text-2xl font-bold mb-4">Property Listings</h2>

      {/* Filter section */}
      <div className="mb-4">
        <h3 className="font-semibold">Filters</h3>
        <div className="flex space-x-4">
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filter.minPrice}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filter.maxPrice}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filter.location}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          />
          <select
            name="type"
            value={filter.type}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
          </select>
        </div>
      </div>

      {/* Property List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard2 key={property.id} property={property} />
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyListing;
