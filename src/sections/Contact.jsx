import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent! Thanks for reaching out 🙌');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="py-12 px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#22D3EE]">Get in Touch</h2>

        <div className="bg-[#3770c8] bg-opacity-90 p-8 rounded-xl shadow-lg">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full mb-4 p-3 border border-[#22D3EE] rounded focus:outline-none focus:ring-2 focus:ring-[#22D3EE] text-[#DDD]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full mb-4 p-3 border border-[#22D3EE] rounded focus:outline-none focus:ring-2 focus:ring-[#22D3EE] text-[#DDD]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="w-full mb-4 p-3 border border-[#22D3EE] rounded focus:outline-none focus:ring-2 focus:ring-[#22D3EE] text-[#DDD]"
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#22D3EE] text-[#1E3A8A] px-6 py-3 rounded-lg hover:bg-[#1E3A8A] hover:text-[#F5F5F5] transition duration-300"
          >
            Send Message
          </button>

          {status && <p className="mt-4 text-[#22D3EE]">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;