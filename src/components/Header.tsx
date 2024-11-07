import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="https://cdn.discordapp.com/attachments/1295285763528724491/1295285895968194560/CTS.png?ex=670e187e&is=670cc6fe&hm=5762daa510dcf7545911d25e427b2c453daec60aa478afb06dac367898d71136&" alt="Clean the Six Logo" className="h-12 mr-2" />
            <span className="text-2xl font-bold text-blue-600">Clean the Six</span>
          </Link>
          <div className="flex items-center space-x-4">
            <a href="tel:2894600829" className="flex items-center text-blue-600">
              <Phone size={20} className="mr-2" />
              <span>(289) 460-0829</span>
            </a>
            <Link to="/booking" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Book Now
            </Link>
          </div>
        </div>
        <nav className="mt-4">
          <ul className="flex space-x-6 justify-center">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
            <li><Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link></li>
            <li><Link to="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link></li>
            <li><Link to="/articles" className="text-gray-600 hover:text-blue-600">Articles</Link></li>
            <li><Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link></li>
            <li><Link to="/register" className="text-gray-600 hover:text-blue-600">Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;