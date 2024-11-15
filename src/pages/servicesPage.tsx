//import React from 'react';

const services = [
  {
    title: "Web Design",
    description: "Creating visually appealing and user-friendly websites.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
  },
  {
    title: "Web Development",
    description: "Building responsive and high-performance web applications.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
  },
  {
    title: "App Development",
    description:
      "Developing mobile applications for iOS and Android platforms.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
  },
  // Add more services as needed
];

const ServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span className="mx-2">{">"}</span>
        <span>Services</span>
      </div>

      <h1 className="text-5xl font-bold mb-16">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-[4/3] relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
