import "../styles.css"
export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 px-6 py-12 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8">
                    
                    {/* Left Section - Brand & Tagline */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-green-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-base">PF&S</span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase">
                                Prints FX & Signs
                            </h2>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Your trusted partner for high-quality printing, signage, and visual solutions in Manila, Philippines.
                        </p>
                    </div>

                    {/* Middle Section - Social Media */}
                    <div className="space-y-4 md:pl-8">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Follow Us
                        </h3>
                        <div className="flex gap-4">
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-md"
                                aria-label="Facebook"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067z"/>
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center hover:opacity-90 transition-all duration-300 shadow-md"
                                aria-label="Instagram"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066 1.172.053 1.972.24 2.672.511.733.277 1.398.71 1.948 1.27.56.549.992 1.213 1.268 1.947.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268-.7.272-1.5.458-2.67.512-1.174.054-1.548.066-4.536.066-2.988 0-3.362-.013-4.535-.066-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268 5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948 5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064-2.937 0-3.285.011-4.445.064-1.073.049-1.655.228-2.043.379-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.073.228 1.655.379 2.043.176.477.457.91.822 1.265.355.365.788.646 1.265.822.388.151.97.33 2.043.379 1.16.053 1.507.064 4.445.064 2.938 0 3.285-.011 4.445-.064 1.073-.049 1.655-.228 2.043-.379.513-.2.88-.437 1.265-.822.365-.355.646-.788.822-1.265.151-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.073-.228-1.655-.379-2.043-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986 3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996 5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89 1.337 1.337 0 0 0 1.89 1.89z"/>
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-md"
                                aria-label="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-all duration-300 shadow-md"
                                aria-label="YouTube"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Contact Info */}
                    <div className="space-y-4 md:pl-8">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Contact Us
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span className="text-sm text-gray-700">Manila, Philippines</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <div className="space-y-1">
                                    <a href="mailto:models@manilarunwayrepublic.com" className="text-sm text-gray-700 hover:text-purple-600 transition-colors block">
                                        models@manilarunwayrepublic.com
                                    </a>
                                    <a href="mailto:kathy@manilarunwayrepublic.com" className="text-sm text-gray-700 hover:text-purple-600 transition-colors block">
                                        kathy@manilarunwayrepublic.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Manila Runway Republic. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}