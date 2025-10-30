import { Image, DollarSign, BarChart3, Rocket } from 'lucide-react';

// Testimonials Carousel Section
<section className="w-full py-24 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold mb-4 max-md:text-2xl">
    What People Say About Us
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto mb-10 max-md:px-4">
    Hear from real clients who built their businesses with us.
  </p>

  {/* Carousel Container */}
  <div className="w-full flex justify-center items-center">
    <div className="w-[90%] max-w-xl bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center animate-slide-in">
      <p className="text-gray-700 italic mb-6 text-lg text-center">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      </p>
      <img
        src="https://via.placeholder.com/80"
        className="rounded-full mb-3"
        alt="User"
      />
      <h4 className="font-semibold text-gray-900">John Doe</h4>
      <span className="text-blue-500 text-sm">CEO</span>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        <span className="w-2 h-2 bg-black rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  </div>
</section>

export default function Mainboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100">
      {/* Hero Content */}
      <div className="container mx-auto px-8 py-32">
        <div className="text-center mb-16">
          <h2 className="text-slate-600 text-lg mb-4 tracking-wide">About Us</h2>
          <h1 className="text-6xl font-bold text-slate-900 mb-8">COMPANY</h1>
          <p className="max-w-3xl mx-auto text-slate-700 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Image Card */}
          <div className="relative bg-gradient-to-br from-slate-400 to-slate-300 rounded-2xl overflow-hidden shadow-xl h-80 flex-1">
            <div className="absolute top-12 left-12 w-16 h-16 bg-white rounded-full"></div>
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
              <path d="M0,150 Q100,80 200,120 T400,100 L400,300 L0,300 Z" fill="rgba(226, 232, 240, 0.9)" />
            </svg>
          </div>

          {/* Right Image Card */}
          <div className="relative bg-gradient-to-br from-slate-400 to-slate-300 rounded-2xl overflow-hidden shadow-xl h-80 flex-1">
            <div className="absolute top-16 right-20 w-12 h-12 bg-white rounded-full"></div>
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
              <path d="M0,180 Q100,120 200,140 T400,110 L400,300 L0,300 Z" fill="rgba(226, 232, 240, 0.9)" />
            </svg>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            Learn More About Us
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
            {[Image, DollarSign, BarChart3, Rocket].map((Icon, i) => (
              <div key={i} className="group flex-1">
                <div className="bg-white border-2 border-slate-300 rounded-3xl p-8 h-52 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-amber-500 group-hover:border-amber-500 cursor-pointer">
                  <Icon className="w-14 h-14 transition-colors duration-300 stroke-slate-800 group-hover:stroke-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-center mt-6 text-lg font-semibold text-slate-800">High Quality Printing</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="max-w-xl">
                <h2 className="text-5xl font-bold text-slate-800 mb-8">Our<br />Mission</h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                </p>
                <button className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
                  Read more
                </button>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="relative bg-gradient-to-br from-slate-400 to-slate-300 rounded-2xl overflow-hidden shadow-lg h-48">
                <div className="absolute top-8 right-12 w-10 h-10 bg-white rounded-full" />
                <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <path d="M0,60 Q50,30 100,50 T200,45 L200,100 L0,100 Z" fill="rgba(226,232,240,0.95)" />
                </svg>
              </div>
              <div className="relative bg-gradient-to-br from-slate-400 to-slate-300 rounded-2xl overflow-hidden shadow-lg h-48">
                <div className="absolute top-8 right-8 w-8 h-8 bg-white rounded-full" />
                <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <path d="M0,70 Q50,40 100,55 T200,50 L200,100 L0,100 Z" fill="rgba(226,232,240,0.95)" />
                </svg>
              </div>
              <div className="relative bg-gradient-to-br from-slate-400 to-slate-300 rounded-2xl overflow-hidden shadow-lg h-48 col-span-2">
                <div className="absolute top-10 right-24 w-10 h-10 bg-white rounded-full" />
                <svg className="absolute bottom-0 left-0 w-full h-36" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <path d="M0,75 Q100,35 200,60 T400,55 L400,120 L0,120 Z" fill="rgba(226,232,240,0.95)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-slate-600 text-lg mb-3 tracking-wide">MEET OUR TEAM</h2>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Dedicated & Professional</h1>
          <p className="max-w-2xl mx-auto text-slate-600 mb-16 text-lg">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {["Michael S.", "Emilio A.", "Andrew E."].map((name, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative bg-gradient-to-b from-slate-300 to-slate-100 h-56 w-56 rounded-2xl shadow-md flex items-end justify-center overflow-hidden">
                  <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path d="M0,60 Q50,30 100,50 T200,45 L200,100 L0,100 Z" fill="white" />
                  </svg>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-md"></div>
                </div>
                <h3 className="text-slate-800 text-xl font-semibold mt-6">{name}</h3>
                <p className="text-slate-500 text-sm">CEO & President</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
