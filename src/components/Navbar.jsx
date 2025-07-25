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
    <nav ref={navRef} className="fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl">
      <div className="bg-black/50 backdrop-blur-md rounded-full py-2 px-6 md:py-6 md:px-8 flex items-center justify-center shadow-lg border border-white/10">
        {/* Logo */}
        <div id="logo" className="text-md md:text-xl font-bold text-white mr-4 md:mr-6">3S Universe</div>

        {/* Desktop Links */}
        <ul className="hidden links md:flex space-x-6">
          <li className="nav-item"><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
          <li className="nav-item"><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
          <li className="nav-item"><a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">Skills</a></li>
          <li className="nav-item"><a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a></li>
          <li className="nav-item"><a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a></li>
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
          <li><a href="#home" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
          <li><a href="#skills" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-300">Skills</a></li>
          <li><a href="#experience" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;