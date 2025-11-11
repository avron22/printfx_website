import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=400',
      title: 'Custom Tote Bag'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=400',
      title: 'Art House Coffee'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400',
      title: 'Business Card'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400',
      title: 'Premium Notebook'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=400',
      title: 'Custom Mug'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
      title: 'Poster Print'
    }
  ];

  const itemsPerSlide = 3;
  const maxSlide = Math.ceil(products.length / itemsPerSlide) - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  const faqs = [
    {
      id: 1,
      question: "What printing methods do you offer?",
      answer: "We offer a variety of printing methods including screen printing, digital printing, DTG (Direct-to-Garment), embroidery, and heat transfer. Each method has its own advantages depending on your design, quantity, and material."
    },
    {
      id: 2,
      question: "What is your minimum order quantity?",
      answer: "Our minimum order quantity varies by product and printing method. For most custom prints, we start from just 10 pieces. Digital printing allows even smaller quantities for personalized items."
    },
    {
      id: 3,
      question: "How long does production take?",
      answer: "Standard production time is 5-7 business days after design approval. Rush orders can be completed in 2-3 business days for an additional fee. Shipping time depends on your location and chosen delivery method."
    },
    {
      id: 4,
      question: "Can I see a sample before placing a bulk order?",
      answer: "Yes! We offer sample production for most products. Sample fees are applied to your final order when you proceed with bulk production. This ensures you're completely satisfied with quality before committing to larger quantities."
    },
    {
      id: 5,
      question: "What file formats do you accept for designs?",
      answer: "We accept various file formats including AI, EPS, PDF, PNG, and high-resolution JPG files. For best results, we recommend vector files (AI or EPS) with all fonts converted to outlines."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden">
      {/* === HERO CONTENT === */}
      <div className="relative flex flex-col justify-center w-screen min-h-screen bg-gradient-to-br from-slate-50 to-stone-50">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Text content */}
        <div className="px-12 md:px-24 lg:px-32 z-10 max-w-7xl mx-auto w-full">
          <div className="space-y-2 mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900">
              Your Designs.
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900">
              Our Prints.
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Infinite Possibilities.
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Transform your creative vision into reality with premium custom printing solutions tailored for your brand.
          </p>
          <button className="group relative bg-slate-900 text-white font-semibold px-10 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Minimal wave transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[120px] md:h-[180px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.4,168.19-17.45,250.45-.39,66.44,13.37,130.71,38.59,197.2,51.23,60.51,11.34,122.74,12.61,183.87,1.73V120H0V16.48C61.39,32.36,122.8,47.33,184.21,54.05,230.85,59.01,276.23,65.67,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>

      {/* === TRUSTED BY SECTION === */}
      <div className="bg-white py-16 overflow-hidden border-y border-slate-100">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-slate-500 tracking-widest uppercase">Trusted by Leading Brands</p>
        </div>
        <div className="relative w-full">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 25s linear infinite;
            }
          `}</style>
          <div className="flex animate-scroll space-x-16">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex items-center space-x-16 flex-shrink-0">
                <div className="w-32 h-20 bg-slate-100 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-slate-400 text-xs font-medium">BRAND</span>
                </div>
              </div>
            ))}
          </div>

          {/* Edge fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* === OUR PRODUCTS SECTION === */}
      <div className="bg-gradient-to-b from-white to-slate-50 py-24 px-12 md:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header with arrows */}
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-3">Our Products</h2>
              <p className="text-slate-600 text-lg">Explore our premium collection</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="bg-slate-900 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-slate-900 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Products carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(products.length / itemsPerSlide) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex gap-8">
                  {products.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((product) => (
                    <div key={product.id} className="flex-1">
                      <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                        <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-slate-900 text-center">{product.title}</h3>
                          <button className="mt-4 w-full py-3 text-sm font-medium text-slate-700 hover:text-slate-900 border border-slate-200 rounded-full hover:border-slate-900 transition-all duration-300">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-slate-900 w-12' : 'bg-slate-300 w-2 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* === FAQ SECTION === */}
      <div className="bg-white py-24 px-12 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg mb-16">Find answers to common questions about our printing services</p>
          
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronRight 
                    size={24} 
                    className={`flex-shrink-0 text-slate-600 transition-transform duration-300 ${
                      openFaq === faq.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 text-lg mb-6">Still have questions?</p>
            <button className="bg-slate-900 text-white font-semibold px-10 py-4 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* === GET IN TOUCH SECTION === */}
      <div className="bg-slate-900 py-24 px-12 md:px-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Form */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Get in Touch
              </h2>
              <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                Have a project in mind? Let's bring your ideas to life. Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-slate-800 border border-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-colors text-white placeholder-slate-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-slate-800 border border-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-colors text-white placeholder-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-200 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-slate-800 border border-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-colors text-white placeholder-slate-400"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-800 border border-slate-700 rounded-xl focus:border-slate-500 focus:outline-none transition-colors resize-none text-white placeholder-slate-400"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
                  alt="Happy customer with custom printed products"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              {/* Subtle glow effects */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-700 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-700 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;