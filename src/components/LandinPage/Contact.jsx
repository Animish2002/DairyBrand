import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Truck } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <MapPin className="text-blue-600" />,
      title: "Headquarters",
      text: "Kalewadi Phata ,Pimpri-Chinchwad, Maharashtra 411017",
    },
    {
      icon: <Mail className="text-red-600" />,
      title: "Email",
      text: "support@valleydairy.com",
    },
    {
      icon: <Clock className="text-purple-600" />,
      title: "Business Hours",
      text: "Mon-Sun: 8:00 AM - 10:00 PM",
    },
    {
      icon: <Truck className="text-orange-600" />,
      title: "Delivery",
      text: "24/7 Distribution Network",
    },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-[#E3D270] pb-4">
              Contact Nirmiti Doodh
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-blue-50 transition duration-300"
                >
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-blue-100 h-64 flex items-center justify-center text-blue-800">
                <span className="text-xl font-semibold">
                  Location Map Placeholder
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-green-500 pb-4">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="(91)-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Inquiry Type
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="distribution">Distribution</option>
                  <option value="product">Product Information</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
