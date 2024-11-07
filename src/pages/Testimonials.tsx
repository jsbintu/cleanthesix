import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Homeowner",
    content: "Clean the Six has been a game-changer for our family. Their attention to detail is impressive, and our home has never looked better!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    content: "We've been using Clean the Six for our office space for over a year now. Their team is professional, efficient, and always goes above and beyond.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Apartment Resident",
    content: "As a busy professional, I don't have much time for cleaning. Clean the Six has been a lifesaver, keeping my apartment spotless and fresh.",
    rating: 4
  },
  {
    name: "David Patel",
    role: "Restaurant Owner",
    content: "Cleanliness is crucial in the food industry. Clean the Six understands this and delivers exceptional results every time. Highly recommended!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">What Our Clients Say</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <p className="mb-4 italic">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;