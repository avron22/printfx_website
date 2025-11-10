import { useState, useEffect } from 'react';
import { Image, DollarSign, BarChart3, Rocket, ChevronLeft, ChevronRight, MapPin, Mail, Phone, Facebook } from 'lucide-react';

const testimonials = [
  {
    quote: "Printf FX transformed our brand identity with their exceptional printing quality. The attention to detail and customer service exceeded all expectations.",
    name: "John Doe",
    role: "CEO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    quote: "Working with this team has been an absolute pleasure. Their expertise in signage solutions helped our business stand out in a competitive market.",
    name: "Sarah Chen",
    role: "Marketing Director",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    quote: "The quality of work and dedication to meeting deadlines is unmatched. They've become our go-to partner for all printing and signage needs.",
    name: "Michael Rodriguez",
    role: "Operations Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  }
];

const features = [
  { icon: Image, title: "High Quality Printing", description: "Professional grade printing for all your business needs" },
  { icon: DollarSign, title: "Competitive Pricing", description: "Best value without compromising on quality" },
  { icon: BarChart3, title: "Data-Driven Solutions", description: "Analytics and insights to optimize your campaigns" },
  { icon: Rocket, title: "Fast Turnaround", description: "Quick delivery without sacrificing excellence" }
];

export default function Mainboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Message sent successfully!');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        <div className="container mx-auto px-6 md:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-block">
              <span className="text-emerald-400 text-sm md:text-base font-semibold tracking-widest uppercase bg-emerald-400/10 px-4 py-2 rounded-full">
                About Us
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Printf FX & Signs
            </h1>
            <p className="max-w-3xl mx-auto text-slate-300 leading-relaxed text-base md:text-lg px-4">
              We deliver exceptional printing and signage solutions that transform businesses. 
              With cutting-edge technology and a passion for excellence, we bring your vision to life 
              with precision and creativity.
            </p>
          </div>

          {/* Enhanced Image Grid with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
            <div className="group relative bg-gradient-to-br from-emerald-500/20 to-slate-700/50 rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80 backdrop-blur-sm border border-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-emerald-500/20">
              <div className="absolute top-8 md:top-12 left-8 md:left-12 w-12 h-12 md:w-16 md:h-16 bg-emerald-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-16 md:top-20 right-16 md:right-20 w-8 h-8 md:w-12 md:h-12 bg-emerald-300 rounded-full opacity-60"></div>
              <svg className="absolute bottom-0 left-0 w-full transition-all duration-500 group-hover:translate-y-2" viewBox="0 0 400 300" preserveAspectRatio="none">
                <path d="M0,150 Q100,80 200,120 T400,100 L400,300 L0,300 Z" fill="rgba(16, 185, 129, 0.15)" />
              </svg>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-500/20 to-slate-700/50 rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80 backdrop-blur-sm border border-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20">
              <div className="absolute top-12 md:top-16 right-12 md:right-20 w-10 h-10 md:w-12 md:h-12 bg-blue-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-20 left-12 w-8 h-8 bg-blue-300 rounded-full opacity-60"></div>
              <svg className="absolute bottom-0 left-0 w-full transition-all duration-500 group-hover:translate-y-2" viewBox="0 0 400 300" preserveAspectRatio="none">
                <path d="M0,180 Q100,120 200,140 T400,110 L400,300 L0,300 Z" fill="rgba(59, 130, 246, 0.15)" />
              </svg>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50">
              <span className="relative z-10">Learn More About Us</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, i) => (
              <div key={i} className="group">
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 h-44 md:h-52 flex flex-col items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:border-emerald-500 cursor-pointer group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-emerald-500/30">
                  <feature.icon className="w-12 h-12 md:w-14 md:h-14 transition-all duration-300 stroke-slate-800 group-hover:stroke-white mb-4" strokeWidth={2.5} />
                </div>
                <h3 className="text-center mt-6 text-base md:text-lg font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Carousel Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-emerald-600 text-sm md:text-base font-semibold tracking-widest uppercase bg-emerald-50 px-4 py-2 rounded-full">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900">
              People Just Like You Are Building<br className="hidden md:block" /> Businesses With Printf FX & Signs
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg px-4">
              Hear from real clients who built their businesses with us.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4 md:px-8">
                    <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col items-center border border-slate-100 hover:shadow-emerald-500/10 transition-shadow duration-300">
                      <div className="mb-8 text-emerald-500">
                        <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-slate-700 text-center mb-8 text-base md:text-xl leading-relaxed italic px-4">
                        "{testimonial.quote}"
                      </p>
                      <img
                        src={testimonial.image}
                        className="rounded-full mb-4 w-16 h-16 md:w-20 md:h-20 border-4 border-emerald-100"
                        alt={testimonial.name}
                      />
                      <h4 className="font-bold text-slate-900 text-lg md:text-xl">{testimonial.name}</h4>
                      <span className="text-emerald-600 text-sm md:text-base font-medium">{testimonial.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-500 text-slate-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-500 text-slate-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2 md:gap-3 justify-center mt-8 md:mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? 'w-8 md:w-10 h-2 md:h-2.5 bg-emerald-500'
                      : 'w-2 md:w-2.5 h-2 md:h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1">
              <div className="max-w-xl">
                <div className="inline-block mb-6">
                  <span className="text-emerald-600 text-sm md:text-base font-semibold tracking-widest uppercase bg-emerald-50 px-4 py-2 rounded-full">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
                  Elevating Your<br />Brand Identity
                </h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                  Our mission is to empower businesses through innovative printing and signage solutions. 
                  We combine creativity, technology, and craftsmanship to deliver results that exceed expectations 
                  and drive meaningful impact.
                </p>
                <button className="group border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105">
                  Read more
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4 md:gap-6 w-full">
              <div className="group relative bg-gradient-to-br from-emerald-400/30 to-slate-300/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-40 md:h-48 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="absolute top-6 md:top-8 right-8 md:right-12 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full group-hover:scale-110 transition-transform" />
                <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <path d="M0,60 Q50,30 100,50 T200,45 L200,100 L0,100 Z" fill="rgba(16, 185, 129, 0.2)" />
                </svg>
              </div>
              <div className="group relative bg-gradient-to-br from-blue-400/30 to-slate-300/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-40 md:h-48 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="absolute top-6 md:top-8 right-6 md:right-8 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full group-hover:scale-110 transition-transform" />
                <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <path d="M0,70 Q50,40 100,55 T200,50 L200,100 L0,100 Z" fill="rgba(59, 130, 246, 0.2)" />
                </svg>
              </div>
              <div className="group relative bg-gradient-to-br from-purple-400/30 to-slate-300/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-40 md:h-48 col-span-2 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="absolute top-8 md:top-10 right-16 md:right-24 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full group-hover:scale-110 transition-transform" />
                <svg className="absolute bottom-0 left-0 w-full h-28 md:h-36" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <path d="M0,75 Q100,35 200,60 T400,55 L400,120 L0,120 Z" fill="rgba(168, 85, 247, 0.2)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-emerald-600 text-sm md:text-base font-semibold tracking-widest uppercase bg-emerald-50 px-4 py-2 rounded-full">
              Meet Our Team
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">Dedicated & Professional</h1>
          <p className="max-w-2xl mx-auto text-slate-600 mb-12 md:mb-16 text-base md:text-lg px-4">
            Our talented team brings years of expertise and passion to every project, 
            ensuring exceptional results that exceed expectations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {["Michael S.", "Emilio A.", "Andrew E."].map((name, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="relative bg-gradient-to-b from-emerald-200 to-emerald-50 h-52 w-52 md:h-56 md:w-56 rounded-3xl shadow-lg flex items-end justify-center overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-emerald-500/30 group-hover:shadow-2xl">
                  <svg className="absolute bottom-0 left-0 w-full h-28 md:h-32 transition-transform duration-500 group-hover:translate-y-2" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0,60 Q50,30 100,50 T200,45 L200,100 L0,100 Z" fill="white" />
                  </svg>
                  <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform"></div>
                </div>
                <h3 className="text-slate-900 text-lg md:text-xl font-bold mt-6 group-hover:text-emerald-600 transition-colors">{name}</h3>
                <p className="text-slate-500 text-sm md:text-base">CEO & President</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-slate-100 via-white to-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block mb-4">
                <span className="text-emerald-600 text-sm md:text-base font-semibold tracking-widest uppercase bg-emerald-50 px-4 py-2 rounded-full">
                  Contact Us
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-4">
                Have a project in mind? Get in touch with us and let's create something amazing together.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-200">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    Get in Touch!
                  </h3>
                  <p className="text-slate-600">Fill out the form and we'll get back to you soon.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Tel. Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
                  >
                    Send Message
                  </button>

                  {formStatus && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-center">
                      {formStatus}
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Details */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-xl p-8 md:p-10 text-white flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Contact Details</h3>

                <div className="space-y-8">
                  {/* Location */}
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/20 p-3 rounded-xl group-hover:bg-emerald-500/30 transition-colors">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Location</h4>
                        <p className="text-slate-300 leading-relaxed">
                          No 71 Jian Street, Yongna, Baiyun District,<br />
                          Guangzhou, Guangdong, China
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mail Box */}
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/20 p-3 rounded-xl group-hover:bg-emerald-500/30 transition-colors">
                        <Mail className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Mail Box</h4>
                        <a href="mailto:sales@printfxandsigns.com" className="text-emerald-400 hover:text-emerald-300 transition-colors block">
                          sales@printfxandsigns.com
                        </a>
                        <a href="mailto:printfxandsigns@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors block">
                          printfxandsigns@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-500/20 p-3 rounded-xl group-hover:bg-emerald-500/30 transition-colors">
                        <Phone className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Contact Number</h4>
                        <a href="tel:+639083939701" className="text-slate-300 hover:text-white transition-colors">
                          0908 - 3939701
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-6 border-t border-slate-700">
                    <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                      <a 
                        href="#" 
                        className="bg-emerald-500/20 hover:bg-emerald-500 p-3 rounded-xl transition-all duration-300 hover:scale-110 group"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}