import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span className="mx-2">{'>'}</span>
        <span>Contact</span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-16">Contact us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-black transition-shadow"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-black transition-shadow"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-black transition-shadow"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-black transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              className="group flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-black transition-colors"
            >
              Send
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-6">Contact us on</h2>
            <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-50 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg">53685542211</p>
                  <p className="text-gray-500">53685542211</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Email</h2>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-50 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="text-lg">cyberinix@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;