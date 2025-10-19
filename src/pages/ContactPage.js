// pages/ContactPage.js
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
          <p className="text-lg">We're here to help with any questions or concerns</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h3>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-700">Main: 1-800-MEDICARE</p>
                    <p className="text-gray-700">Support: 1-800-987-6543</p>
                    <p className="text-sm text-gray-600 mt-1">Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-700">info@medicareplus.com</p>
                    <p className="text-gray-700">support@medicareplus.com</p>
                    <p className="text-sm text-gray-600 mt-1">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <p className="text-gray-700">123 Health Street</p>
                    <p className="text-gray-700">Medical City, MC 12345</p>
                    <p className="text-gray-700">United States</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3">Business Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-300">
                    <p className="text-sm text-blue-600 font-semibold">Pharmacy Support: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold text-lg mb-2">How do I place an order?</h4>
              <p className="text-gray-600">Simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account for prescription medications.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold text-lg mb-2">Do you accept insurance?</h4>
              <p className="text-gray-600">Yes! We accept most major insurance plans. Please contact our support team with your insurance details for verification.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold text-lg mb-2">How long does delivery take?</h4>
              <p className="text-gray-600">Standard delivery takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold text-lg mb-2">Can I consult with a pharmacist?</h4>
              <p className="text-gray-600">Absolutely! Our licensed pharmacists are available 24/7 via phone, email, or live chat to answer your questions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;