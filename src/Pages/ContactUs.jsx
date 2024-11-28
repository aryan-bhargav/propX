import React from 'react';

const ContactUs = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          className="border rounded w-full p-2"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          className="border rounded w-full p-2"
          placeholder="Your Email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea
          id="message"
          rows="4"
          className="border rounded w-full p-2"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
);

export default ContactUs;
