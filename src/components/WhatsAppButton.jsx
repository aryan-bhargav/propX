// src/components/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const phoneNumber = 9315409747;

const WhatsAppButton = ({ phoneNumber, propertyTitle, propertyPrice }) => {
  // WhatsApp link with a custom message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=I'm%20interested%20in%20your%20property%20"${propertyTitle}"%20listed%20at%20${propertyPrice}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button mt-4 px-6 py-2 bg-green-500 text-white rounded-md inline-flex items-center space-x-2 hover:bg-green-600"
    >
      <FaWhatsapp className="text-xl" />
      <span>Contact on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
