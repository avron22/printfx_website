import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles.css";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsMobileOpen(false);
      setIsAnimatingOut(false);
    }, 400);
  };

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        .animate-slide-in {
          animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-slide-out {
          animation: slideOut 0.4s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active::after {
          width: 100%;
          background: #000;
        }

        .hamburger-line {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hamburger-line:nth-child(1) {
          transform: translateY(-4px);
        }

        .hamburger-line:nth-child(3) {
          transform: translateY(4px);
        }

        .hamburger-open .hamburger-line:nth-child(1) {
          transform: translateY(0) rotate(45deg);
        }

        .hamburger-open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger-open .hamburger-line:nth-child(3) {
          transform: translateY(0) rotate(-45deg);
        }

        .mobile-nav-link {
          position: relative;
          transition: all 0.3s ease;
          padding-left: 0;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: #000;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-nav-link:hover::before,
        .mobile-nav-link.active::before {
          width: 32px;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          padding-left: 44px;
        }

        .social-icon {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .social-icon:hover {
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .backdrop {
          backdrop-filter: blur(4px);
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-5 py-4 sm:px-8 md:px-20 lg:px-16 xl:px-24 2xl:px-72 max-w-[1920px] mx-auto">
          {/* Logo */}
          <a href="/" className="relative z-10 transition-transform hover:scale-105">
            <img 
              src="/src/assets/logo2.png" 
              alt="Site Logo" 
              className="w-20 md:w-28 lg:w-32 xl:w-36"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <NavLink 
              to="/aboutus" 
              className="nav-link text-sm xl:text-base 2xl:text-lg font-semibold text-gray-800 hover:text-black"
              end
            >
              ABOUT US
            </NavLink>
            <NavLink 
              to="/services" 
              className="nav-link text-sm xl:text-base 2xl:text-lg font-semibold text-gray-800 hover:text-black"
            >
              SERVICES
            </NavLink>
            <NavLink 
              to="/products" 
              className="nav-link text-sm xl:text-base 2xl:text-lg font-semibold text-gray-800 hover:text-black"
            >
              PRODUCTS
            </NavLink>
            <NavLink 
              to="/contact" 
              className="nav-link text-sm xl:text-base 2xl:text-lg font-semibold text-gray-800 hover:text-black"
            >
              CONTACT US
            </NavLink>
          </nav>

          {/* Hamburger Button */}
          <button
            className={`lg:hidden relative z-50 flex flex-col justify-center items-center gap-2.5 p-3 w-12 h-12 rounded-lg transition-all hover:bg-gray-100 ${
              isMobileOpen ? 'hamburger-open bg-gray-100' : ''
            }`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line w-5 h-0.5 bg-gray-900 block rounded-full absolute"></span>
            <span className="hamburger-line w-5 h-0.5 bg-gray-900 block rounded-full absolute"></span>
            <span className="hamburger-line w-5 h-0.5 bg-gray-900 block rounded-full absolute"></span>
          </button>
        </div>
      </header>

      {/* Add padding to body content to account for fixed header */}
      <div className="h-20 md:h-24 lg:h-28"></div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/40 backdrop ${
              isAnimatingOut ? 'animate-fade-out' : 'animate-fade-in'
            }`}
            onClick={handleClose}
          ></div>

          {/* Menu Panel */}
          <div 
            className={`fixed top-0 right-0 h-full w-[85%] sm:w-[75%] md:w-[60%] bg-gradient-to-br from-gray-50 to-white shadow-2xl flex flex-col ${
              isAnimatingOut ? 'animate-slide-out' : 'animate-slide-in'
            }`}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 text-2xl font-light"
              onClick={handleClose}
            >
              ×
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-6 px-8 pt-32 sm:pt-36 md:pt-40 sm:px-12 md:px-16">
              <NavLink 
                to="/aboutus" 
                className="mobile-nav-link text-lg sm:text-xl md:text-2xl font-semibold text-gray-800"
                end 
                onClick={handleClose}
              >
                ABOUT US
              </NavLink>
              <NavLink 
                to="/services" 
                className="mobile-nav-link text-lg sm:text-xl md:text-2xl font-semibold text-gray-800"
                onClick={handleClose}
              >
                SERVICES
              </NavLink>
              <NavLink 
                to="/products" 
                className="mobile-nav-link text-lg sm:text-xl md:text-2xl font-semibold text-gray-800"
                onClick={handleClose}
              >
                PRODUCTS
              </NavLink>
              <NavLink 
                to="/contact" 
                className="mobile-nav-link text-lg sm:text-xl md:text-2xl font-semibold text-gray-800"
                onClick={handleClose}
              >
                CONTACT US
              </NavLink>
            </nav>

            {/* Bottom Section */}
            <div className="mt-auto px-8 pb-12 sm:px-12 md:px-16 space-y-8">
              {/* Logo */}
              <div className="flex justify-center py-8">
                <a href="/" className="w-36 sm:w-44 md:w-52 opacity-80 hover:opacity-100 transition-opacity">
                  <img 
                    src="/src/assets/logos/Transparent_MRR_logo.png" 
                    alt="Site Logo"
                    className="w-full"
                  />
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.facebook.com/p/Manila-Runway-Republic-100066762881641/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a 
                  href="https://www.instagram.com/manilarunwayrepublic/?hl=en" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a 
                  href="https://www.tiktok.com/@manilarunwayrepublic" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943c0 .2 0 .399-.008.595 0 .024-.003.046-.004.073 0 .01 0 .022-.003.033v.009a3.28 3.28 0 0 1-1.65 2.604 3.226 3.226 0 0 1-1.6.422c-1.8 0-3.26-1.468-3.26-3.281 0-1.814 1.46-3.282 3.26-3.282.341 0 .68.054 1.004.16l.005-3.936A7.178 7.178 0 0 0 4.76 10.71a7.583 7.583 0 0 0-1.655 2.04c-.163.281-.779 1.412-.853 3.246-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.856 7.856 0 0 0 1.674 1.58v-.01l.009.01c1.87 1.27 3.945 1.187 3.945 1.187.359-.015 1.562 0 2.928-.647 1.515-.718 2.377-1.787 2.377-1.787a7.43 7.43 0 0 0 1.296-2.153c.35-.92.466-2.022.466-2.462V8.273c.047.028.672.441.672.441s.9.577 2.303.952c1.006.267 2.363.324 2.363.324V6.153c-.475.052-1.44-.098-2.429-.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}