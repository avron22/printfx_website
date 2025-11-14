import React from 'react';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Banner Prints', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop' },
  { id: 2, name: 'Vehicle Wraps', image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&h=300&fit=crop' },
  { id: 3, name: 'Signage Boards', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop' },
  { id: 4, name: 'Wall Graphics', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop' },
  { id: 5, name: 'Retail Displays', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' },
  { id: 6, name: 'Window Decals', image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=300&fit=crop' },
  { id: 7, name: 'Trade Show Graphics', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop' },
  { id: 8, name: 'Promotional Materials', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop' },
  { id: 9, name: 'Business Cards', image: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=400&h=300&fit=crop' },
  { id: 10, name: 'Brochures', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop' },
  { id: 11, name: 'Posters', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
  { id: 12, name: 'Custom Prints', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop' }
];

export default function GRWMRR(): React.ReactElement {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-full border border-sky-500/30 backdrop-blur-sm">
            <span className="text-sky-300 font-semibold text-xs sm:text-sm">✨ Premium Quality Guaranteed</span>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 fill-sky-400 text-sky-400 animate-pulse" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              Our Products
            </h1>
            <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 fill-pink-400 text-pink-400 animate-pulse" />
          </div>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium printing and signage solutions designed to elevate your brand to new heights
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto">
          {[
            { label: 'Products', value: '500+', icon: '📦' },
            { label: 'Happy Clients', value: '2,000+', icon: '😊' },
            { label: 'Projects Done', value: '5,000+', icon: '✅' },
            { label: 'Years Experience', value: '15+', icon: '⭐' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12">
            Featured <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Collections</span>
          </h2>
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-sky-400/50 shadow-lg hover:shadow-sky-500/20 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20 blur-xl transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Image Container */}
                <div className="relative h-40 sm:h-44 md:h-48 bg-gradient-to-br from-slate-800 to-slate-700 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                      Explore →
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-sky-500 to-purple-600 text-white text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    NEW
                  </div>
                </div>

                {/* Product Name */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-white/5 to-transparent relative z-10">
                  <h3 className="text-center text-white font-bold text-sm sm:text-base group-hover:text-sky-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-center text-slate-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Premium Quality
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-sky-500/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12">
            Why Choose <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Our Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: '🚀',
                title: 'Fast Turnaround',
                description: 'Quick production and delivery without compromising quality'
              },
              {
                icon: '💎',
                title: 'Premium Materials',
                description: 'We use only the highest quality materials for lasting results'
              },
              {
                icon: '🎨',
                title: 'Custom Designs',
                description: 'Tailored solutions to match your unique brand identity'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 border border-white/10 hover:border-sky-400/50 transition-all duration-500 hover:scale-105">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-purple-500/0 group-hover:from-sky-500/10 group-hover:to-purple-500/10 rounded-2xl sm:rounded-3xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/10 w-full max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
              Transform your vision into reality with our premium printing and signage solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
              <button className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 text-white px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40">
                <span>Explore All Products</span>
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </button>
              <button className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 border border-white/20">
                <span>Contact Us</span>
                <span className="transition-transform group-hover:translate-x-2">💬</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}