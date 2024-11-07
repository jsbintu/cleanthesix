import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Professional Cleaning Services in Mississauga</h1>
            <p className="text-xl mb-8">Experience the difference with our top-rated cleaning services. We provide residential, commercial, and Airbnb cleaning solutions.</p>
            <Link to="/booking" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center">
              Book Now <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Residential Cleaning</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Deep cleaning of all rooms</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Kitchen and bathroom sanitization</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Floor cleaning and vacuuming</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Dusting and surface cleaning</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Commercial Cleaning</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Office space cleaning</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Common area maintenance</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Restroom sanitation</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Window and glass cleaning</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Airbnb Cleaning</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Quick turnover cleaning</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Linen change and laundry</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Restocking essentials</li>
                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Property inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Professional and trained cleaning experts</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Using environmentally safe cleaning products</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction or we'll re-clean for free</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Book online 24/7 at your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Experience a Cleaner Space?</h2>
          <Link to="/booking" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center">
            Book Your Cleaning <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;