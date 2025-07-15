import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.from('.nav-item', {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.2,
    });
  }, { scope: navRef });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav ref={navRef} className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/50 backdrop-blur-md rounded-full py-6 px-12 flex items-center justify-center shadow-lg border border-white/10">
        {/* Logo */}
        <div id="logo" className="text-xl font-bold text-white mr-6">3S Universe</div>

        {/* Desktop Links */}
        <ul className="hidden links md:flex space-x-6">
          <li className="nav-item"><a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
          <li className="nav-item"><a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a></li>
          <li className="nav-item"><a href="#showcases" className="text-gray-300 hover:text-white transition-colors duration-300">Showcases</a></li>
          <li className="nav-item"><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg flex flex-col items-center py-4 md:hidden space-y-4 shadow-lg">
          <li><a href="#hero" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
          <li><a href="#features" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-300">Features</a></li>
          <li><a href="#showcases" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-300">Showcases</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;