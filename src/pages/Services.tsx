import React, { useState } from 'react';

interface DesignStep {
  title: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const whyChoosePoints: string[] = [
  "Industry-leading quality with state-of-the-art printing technology",
  "Experienced team dedicated to bringing your vision to life",
  "Fast turnaround times without compromising on quality",
  "Competitive pricing that fits your budget",
  "Comprehensive solutions from design to installation"
];

const designProcessSteps: DesignStep[] = [
  {
    title: "Consultation & Discovery",
    description: "We begin by understanding your vision, brand identity, and specific requirements. Our team collaborates with you to define project goals and explore creative possibilities."
  },
  {
    title: "Design & Development",
    description: "Our expert designers craft custom solutions tailored to your needs. We present mockups and concepts, refining them based on your feedback to ensure perfect alignment."
  },
  {
    title: "Production & Delivery",
    description: "Using cutting-edge technology and premium materials, we bring your project to life with precision. Our team ensures timely delivery and professional installation when needed."
  }
];

export default function Mainboard(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Our Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tight">
              our services
            </h1>
            
            <p className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
              We specialize in providing comprehensive printing and signage solutions tailored to your business needs. 
              From high-quality large format printing to eye-catching custom signage, our state-of-the-art equipment 
              and experienced team ensure superior results every time. Whether you need banners, vehicle wraps, 
              indoor/outdoor signs, or promotional materials, we deliver excellence with attention to detail and 
              commitment to your vision. Transform your brand visibility with our professional services designed 
              to make your business stand out.
            </p>

            <button className="group inline-flex items-center gap-2 sm:gap-3 bg-sky-500 hover:bg-sky-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30">
              <span>Book an Appointment</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-10 sm:mb-12 md:mb-16 text-center tracking-tight">
              Design Process
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
              {designProcessSteps.map((step: DesignStep, index: number) => {
                const stepNumber: number = index + 1;
                return (
                  <div key={index} className="flex flex-col">
                    {/* Visual Card */}
                    <div className="group relative bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-48 sm:h-52 md:h-56 mb-4 sm:mb-5 md:mb-6 hover:scale-105 transition-all duration-500">
                      <div className="absolute top-8 sm:top-10 right-10 sm:right-12 w-12 sm:w-14 h-12 sm:h-14 bg-white rounded-full opacity-80 group-hover:scale-110 transition-transform"></div>
                      <div className="absolute bottom-10 sm:bottom-12 left-8 sm:left-10 w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full opacity-60"></div>
                      <svg className="absolute bottom-0 left-0 w-full h-28 sm:h-32 transition-transform group-hover:translate-y-2" viewBox="0 0 300 150" preserveAspectRatio="none">
                        <path d="M0,80 Q75,40 150,70 T300,65 L300,150 L0,150 Z" fill="rgba(255, 255, 255, 0.9)" />
                      </svg>
                      
                      {/* Step Number */}
                      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-8 sm:w-10 h-8 sm:h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg">
                        {stepNumber}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="group inline-flex items-center gap-2 sm:gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/30">
                <span>Click here</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Print FX Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8 md:mb-10 tracking-tight">
                  Why Choose Print FX
                </h2>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {whyChoosePoints.map((point: string, index: number) => {
                    const pointKey: string = `why-choose-${index}`;
                    return (
                      <div key={pointKey} className="flex items-start gap-3 sm:gap-4 group">
                        <div className="flex-shrink-0 w-2 h-2 bg-slate-900 rounded-full mt-2 sm:mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                        <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-slate-900 transition-colors">
                          {point}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Visual Elements */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="group relative bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg h-48 sm:h-56 md:h-64 hover:scale-105 transition-all duration-500">
                  <div className="absolute top-6 sm:top-8 right-8 sm:right-10 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-full opacity-80 group-hover:scale-110 transition-transform"></div>
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full opacity-60"></div>
                  <svg className="absolute bottom-0 left-0 w-full h-28 sm:h-32 transition-transform group-hover:translate-y-2" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0,60 Q50,30 100,50 T200,45 L200,100 L0,100 Z" fill="rgba(148, 163, 184, 0.3)" />
                  </svg>
                </div>

                <div className="group relative bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg h-48 sm:h-56 md:h-64 hover:scale-105 transition-all duration-500">
                  <div className="absolute top-8 sm:top-10 right-6 sm:right-8 w-12 sm:w-14 h-12 sm:h-14 bg-white rounded-full opacity-70 group-hover:scale-110 transition-transform"></div>
                  <svg className="absolute bottom-0 left-0 w-full h-28 sm:h-32 transition-transform group-hover:translate-y-2" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0,70 Q50,40 100,55 T200,50 L200,100 L0,100 Z" fill="rgba(148, 163, 184, 0.4)" />
                  </svg>
                </div>

                <div className="group relative bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg h-48 sm:h-56 md:h-64 col-span-2 hover:scale-105 transition-all duration-500">
                  <div className="absolute top-10 sm:top-12 right-16 sm:right-20 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-full opacity-75 group-hover:scale-110 transition-transform"></div>
                  <div className="absolute bottom-12 sm:bottom-16 left-12 sm:left-16 w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full opacity-60"></div>
                  <svg className="absolute bottom-0 left-0 w-full h-32 sm:h-36 transition-transform group-hover:translate-y-2" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <path d="M0,75 Q100,35 200,60 T400,55 L400,120 L0,120 Z" fill="rgba(148, 163, 184, 0.4)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left side - Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get in Touch!
              </h2>
              <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg">
                Have a project in mind? Let's bring your ideas to life. Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] shadow-lg text-base sm:text-lg"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative mt-8 md:mt-0">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
                  alt="Happy customer with custom printed products"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 sm:w-24 h-20 sm:h-24 bg-purple-400 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 bg-pink-400 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}