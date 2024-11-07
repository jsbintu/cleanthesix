import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Clean the Six</h3>
            <p className="mb-4">Professional cleaning services for residential, commercial, and Airbnb spaces in Mississauga and surrounding areas.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-pink-400"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Twitter size={24} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-300">Home</a></li>
              <li><a href="/about" className="hover:text-blue-300">About</a></li>
              <li><a href="/pricing" className="hover:text-blue-300">Pricing</a></li>
              <li><a href="/testimonials" className="hover:text-blue-300">Testimonials</a></li>
              <li><a href="/articles" className="hover:text-blue-300">Articles</a></li>
              <li><a href="/booking" className="hover:text-blue-300">Book Now</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><MapPin size={20} className="mr-2" /> 123 Clean Street, Mississauga, ON L5B 1M3</li>
              <li className="flex items-center"><Phone size={20} className="mr-2" /> (289) 460-0829</li>
              <li className="flex items-center"><Mail size={20} className="mr-2" /> info@cleanthesix.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Clean the Six. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;