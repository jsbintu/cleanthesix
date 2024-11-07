import React, { useState } from 'react';
import { Check } from 'lucide-react';

const services = [
  {
    title: "Residential Cleaning",
    price: "$55",
    duration: "/hour",
    minimum: "3-hour minimum",
    description: "Perfect for homes and apartments",
    checklist: {
      "Living Areas": [
        "Dust and wipe all surfaces",
        "Vacuum and mop floors",
        "Clean mirrors and windows",
        "Empty trash bins",
        "Sanitize light switches and doorknobs"
      ],
      "Kitchen": [
        "Clean countertops and backsplash",
        "Clean stovetop and appliances",
        "Sanitize sink and faucet",
        "Clean microwave inside and out",
        "Wipe cabinet fronts"
      ],
      "Bathrooms": [
        "Sanitize toilet, sink, and shower/tub",
        "Clean mirrors and fixtures",
        "Scrub tiles and grout",
        "Restock toiletries (if provided)",
        "Disinfect high-touch surfaces"
      ],
      "Bedrooms": [
        "Dust furniture and fixtures",
        "Vacuum carpets and floors",
        "Clean mirrors",
        "Empty trash bins",
        "Make beds (upon request)"
      ]
    }
  },
  {
    title: "Commercial Cleaning",
    price: "$65",
    duration: "/hour",
    minimum: "2-hour minimum",
    description: "Ideal for offices and retail spaces",
    checklist: {
      "Common Areas": [
        "Vacuum all floors and carpets",
        "Dust and clean all surfaces",
        "Sanitize door handles and light switches",
        "Empty and clean trash bins",
        "Clean entrance glass and doors"
      ],
      "Workspaces": [
        "Clean and sanitize desks",
        "Dust computer equipment",
        "Clean phone equipment",
        "Wipe chair arms and bases",
        "Organize and tidy communal areas"
      ],
      "Restrooms": [
        "Deep clean all fixtures",
        "Restock supplies",
        "Sanitize all surfaces",
        "Clean mirrors and dispensers",
        "Mop floors with disinfectant"
      ],
      "Kitchen/Break Room": [
        "Clean counters and tables",
        "Sanitize sink and faucet",
        "Clean appliances",
        "Wipe cabinet fronts",
        "Restock supplies"
      ]
    }
  },
  {
    title: "Airbnb Cleaning",
    price: "$75",
    duration: "/hour",
    minimum: "2-hour minimum",
    description: "Specialized for short-term rentals",
    checklist: {
      "General": [
        "Complete property inspection",
        "Restock essential supplies",
        "Check for damages/maintenance needs",
        "Photograph cleaned spaces",
        "Set up welcome amenities"
      ],
      "Living/Sleeping Areas": [
        "Change all linens and make beds",
        "Deep clean all surfaces",
        "Vacuum and mop floors",
        "Clean windows and mirrors",
        "Check electronics and remotes"
      ],
      "Kitchen": [
        "Deep clean all appliances",
        "Sanitize counters and surfaces",
        "Check and clean all utensils",
        "Restock kitchen supplies",
        "Clean inside cabinets"
      ],
      "Bathroom": [
        "Deep clean and sanitize all fixtures",
        "Replace towels and toiletries",
        "Clean shower/tub thoroughly",
        "Check and replace supplies",
        "Sanitize all surfaces"
      ]
    }
  }
];

const Pricing: React.FC = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services & Pricing</h1>
        
        {/* Hero Banner */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cleaning Service" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Professional Cleaning Services</div>
              <p className="mt-2 text-gray-500">Experience top-quality cleaning for your home, office, or Airbnb. Our expert team ensures a spotless environment tailored to your needs.</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className={`bg-gray-100 rounded-lg p-4 flex-1 min-w-[200px] cursor-pointer transition duration-300 ${selectedService.title === service.title ? 'ring-2 ring-indigo-500' : 'hover:shadow-md'}`}
                    onClick={() => setSelectedService(service)}
                  >
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-2xl font-bold text-indigo-600">{service.price}<span className="text-sm font-normal text-gray-500">{service.duration}</span></p>
                    <p className="text-sm text-gray-500 mt-1">{service.minimum}</p>
                    <p className="text-sm mt-2">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6">{selectedService.title} Checklist</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(selectedService.checklist).map(([area, items]) => (
              <div key={area} className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">{area}</h3>
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg mb-4">All prices include cleaning supplies and equipment.</p>
          <p className="text-lg">Contact us for custom quotes on large spaces or special cleaning requirements.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;