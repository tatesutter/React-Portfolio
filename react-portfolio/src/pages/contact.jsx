import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Message sent!');
    }
  };

  return (
    <section className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
