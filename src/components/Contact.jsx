import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting contact form...");

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-xl">
        <input 
          type="text" 
          placeholder="Your Name"
          className="w-full p-4 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input 
          type="email" 
          placeholder="Your Email"
          className="w-full p-4 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <textarea 
          placeholder="Your Message"
          rows="5"
          className="w-full p-4 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-bold transition-all">
          Send Message
        </button>
        {status && <p className="text-center mt-4 text-blue-400 font-semibold">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;