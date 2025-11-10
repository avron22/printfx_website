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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Star className="w-8 h-8 fill-sky-400 text-sky-400 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Products
            </h1>
            <Star className="w-8 h-8 fill-sky-400 text-sky-400 animate-pulse" />
          </div>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of premium printing and signage solutions designed to elevate your brand
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Details
                  </span>
                </div>
              </div>

              {/* Product Name */}
              <div className="p-4 bg-white">
                <h3 className="text-center text-slate-900 font-bold text-sm md:text-base group-hover:text-sky-600 transition-colors">
                  {product.name}
                </h3>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-sky-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40">
            <span>Explore All Products</span>
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
      
    </div>
  );
}