import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Properties from './Pages/Properties';
import PropertyListing from './Pages/PropertyListing'; // Import PropertyListing
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/properties" element={<PropertyListing />} /> {/* Property Listing route */}
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </Router>
  );
}

export default App;
