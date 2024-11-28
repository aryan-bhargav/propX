import React from 'react';
import PropertyScroll from '../components/PropertyScroll'; // Scroll component for properties
import Footer from '../components/Footer'; // Footer component
import heroImage from '../assets/images/hero.jpg';
import RandomImage from '../components/RandomImage';
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <RandomImage
          className="w-full h-[50vh] object-cover opacity-10"
        />
        {/* <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-[50vh] object-cover opacity-10"
        /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to 9FlyProperties</h1>
          <p className="text-lg text-gray-200 mb-6">Your Trusted Real Estate Partner</p>
          <a
            href="/properties"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
          >
            Browse Properties
          </a>
        </div>
      </section>

      {/* Property Scroll Section */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Properties</h2>
        <PropertyScroll />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
