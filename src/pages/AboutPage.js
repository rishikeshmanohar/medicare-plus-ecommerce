// pages/AboutPage.js
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">About MediCare Plus</h2>
          <p className="text-lg">Your trusted partner in health and wellness</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Founded in 2020, MediCare Plus emerged with a simple yet powerful mission: to make quality healthcare products accessible to everyone. What started as a small family-owned pharmacy has grown into one of the most trusted pharmaceutical e-commerce platforms in the country.
            </p>
            <p>
              We believe that healthcare is a fundamental right, not a privilege. That's why we've dedicated ourselves to providing authentic, affordable medications and health products with the highest standards of quality and service.
            </p>
            <p>
              Today, we serve over 500,000 customers nationwide, offering a comprehensive range of prescription medications, over-the-counter products, vitamins, and wellness supplements. Our team of licensed pharmacists is available 24/7 to provide expert consultation and ensure you receive the care you deserve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                SM
              </div>
              <h4 className="text-xl font-bold mb-1">Dr. Sarah Mitchell</h4>
              <p className="text-blue-600 font-semibold mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                PhD in Pharmaceutical Sciences from Stanford University. 20+ years of experience in healthcare innovation and pharmaceutical research.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                MC
              </div>
              <h4 className="text-xl font-bold mb-1">Michael Chen</h4>
              <p className="text-blue-600 font-semibold mb-3">Chief Operating Officer</p>
              <p className="text-gray-600 text-sm">
                Former VP of Operations at major pharmaceutical distributor. Expert in supply chain management and logistics optimization.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                ER
              </div>
              <h4 className="text-xl font-bold mb-1">Dr. Emily Rodriguez</h4>
              <p className="text-blue-600 font-semibold mb-3">Chief Pharmacist</p>
              <p className="text-gray-600 text-sm">
                PharmD with 15 years of clinical pharmacy experience. Leads our team of licensed pharmacists providing customer consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Mission & Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h4>
              <p className="text-gray-700">
                To revolutionize healthcare access by providing safe, affordable, and authentic pharmaceutical products through innovative technology and compassionate service, improving the health and well-being of communities worldwide.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-4 text-green-900">Our Values</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Integrity:</strong> We never compromise on quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Accessibility:</strong> Healthcare for all</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Excellence:</strong> Continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Compassion:</strong> We care about well-being</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500K+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1M+</div>
              <div className="text-lg">Orders Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Licensed Pharmacists</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.8%</div>
              <div className="text-lg">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;