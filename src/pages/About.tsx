import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Clean the Six</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cleaning Team" className="rounded-lg shadow-md" />
          </div>
          <div>
            <p className="mb-4">Clean the Six is Toronto's premier cleaning service, dedicated to providing top-notch residential and commercial cleaning solutions. With years of experience and a team of skilled professionals, we ensure that every space we touch sparkles with cleanliness.</p>
            <p className="mb-6">Our mission is to create healthier, more comfortable living and working environments for our clients. We understand that a clean space is not just about appearance; it's about promoting well-being and productivity.</p>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-2">
              <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Professionalism in every aspect of our service</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Attention to detail in all cleaning tasks</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Eco-friendly cleaning products and methods</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Respect for our clients' spaces and privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;