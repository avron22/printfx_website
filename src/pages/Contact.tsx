import React, { useState } from "react";
import { MapPin, Mail, Send, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-200/30 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase bg-gray-100 px-4 py-2 rounded-full">
              Contact Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to start your modeling journey? Reach out to our team and let's make your dreams a reality.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Section - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    29 20th Ave, Cubao<br />
                    Quezon City, 1110<br />
                    Metro Manila
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Email Us</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:models@manilarunwayrepublic.com"
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      models@manilarunwayrepublic.com
                    </a>
                    <a 
                      href="mailto:kathy@manilarunwayrepublic.com"
                      className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      kathy@manilarunwayrepublic.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3">Business Hours</h3>
              <div className="space-y-2 text-gray-200">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:col-span-3">
            <div 
              className="bg-white rounded-3xl p-10 shadow-2xl shadow-gray-300/50 border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gray-100 to-transparent rounded-full blur-2xl opacity-50" />
              
              <div className="relative space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours</p>
                </div>

                {/* Name + Email Row */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your modeling aspirations..."
                    rows={6}
                    required
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <div className="text-center text-green-600 text-sm font-medium">
                    Thank you! We'll be in touch soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;