import React, { useState } from 'react';
import properties from '../Data/Properties';

const Properties = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const filteredProperties = properties.filter((property) => {
        const matchesSearch = property.name.toLowerCase().includes(searchText.toLowerCase()) ||
                              property.location.toLowerCase().includes(searchText.toLowerCase());
        const matchesType = selectedType ? property.type === selectedType : true;
        const matchesPrice =
            (!minPrice || property.price >= minPrice) &&
            (!maxPrice || property.price <= maxPrice);

        return matchesSearch && matchesType && matchesPrice;
    });

    return (
        <div className="p-4">
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by name or location"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            />

            {/* Filters */}
            <div className="flex gap-4 mb-4">
                {/* Filter by Type */}
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="border p-2 rounded w-1/3"
                >
                    <option value="">All Types</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Plot">Plot</option>
                    <option value="Studio">Studio</option>
                </select>

                {/* Filter by Min Price */}
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="border p-2 rounded w-1/3"
                />

                {/* Filter by Max Price */}
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="border p-2 rounded w-1/3"
                />
            </div>

            {/* Filtered Property List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProperties.map((property) => (
                    <div key={property.id} className="border p-4 rounded shadow">
                        <h2 className="text-lg font-bold">{property.name}</h2>
                        <p>Type: {property.type}</p>
                        <p>Location: {property.location}</p>
                        <p>Price: ₹{property.price.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Properties;
