import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "The Benefits of Professional House Cleaning",
    excerpt: "Discover why hiring a professional cleaning service can improve your life and home.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    title: "5 Eco-Friendly Cleaning Tips for a Greener Home",
    excerpt: "Learn how to keep your home clean while being environmentally conscious.",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Deep Cleaning Your Kitchen",
    excerpt: "Step-by-step instructions for a thorough kitchen clean that will leave it sparkling.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const Articles: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Cleaning Tips & Insights</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link to={`/article/${article.id}`} className="text-blue-600 hover:underline">Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;