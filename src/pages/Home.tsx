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
    // Add your form submission logic here
  };

  return (
    <div className="bg-[#C3CCD3] flex flex-col overflow-hidden">
      {/* === HERO CONTENT + WAVE === */}
      <div className="relative flex flex-col justify-center w-screen min-h-screen">
        {/* Text content */}
        <div className="px-12 md:px-24 z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Your Designs.
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Prints.</h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Infinite Possibilities.
          </h1>
          <button className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Start Now
          </button>
        </div>

        {/* Wavy background */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(200%+1.3px)] h-[300px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.4,168.19-17.45,250.45-.39,66.44,13.37,130.71,38.59,197.2,51.23,60.51,11.34,122.74,12.61,183.87,1.73V120H0V16.48C61.39,32.36,122.8,47.33,184.21,54.05,230.85,59.01,276.23,65.67,321.39,56.44Z"
              fill="#E8EBEE"
            ></path>
          </svg>
        </div>
      </div>

      {/* === CAROUSEL SECTION (below wave) === */}
      <div className="bg-white py-12 overflow-hidden">
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
              animation: scroll 20s linear infinite;
            }
          `}</style>
          <div className="flex animate-scroll space-x-12">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex items-center space-x-6 flex-shrink-0">
                <img
                  src="https://via.placeholder.com/100x100.png?text=Logo"
                  alt="placeholder"
                  className="w-24 h-24 object-contain"
                />
                <div className="w-[2px] h-20 bg-gray-300"></div>
              </div>
            ))}
          </div>

          {/* Edge fade effect */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* === OUR PRODUCTS SECTION === */}
      <div className="bg-[#E8EBEE] py-16 px-12 md:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header with arrows */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold">Our Products</h2>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Products carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(products.length / itemsPerSlide) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex gap-6">
                  {products.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((product) => (
                    <div key={product.id} className="flex-1">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-center">{product.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-black w-8' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* === FAQ SECTION === */}
      <div className="bg-white py-16 px-12 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-3 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-12">Find answers to common questions about our printing services</p>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronRight 
                    size={24} 
                    className={`flex-shrink-0 text-gray-600 transition-transform duration-300 ${
                      openFaq === faq.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* === GET IN TOUCH SECTION === */}
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 px-12 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Form */}
            <div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get in Touch!
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Have a project in mind? Let's bring your ideas to life. Fill out the form and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                    required
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
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
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
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
                  alt="Happy customer with custom printed products"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-400 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;