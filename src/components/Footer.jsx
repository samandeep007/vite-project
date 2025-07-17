// src/components/Footer.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useGSAP(() => {
    gsap.from('.footer-link', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top bottom',
      },
    });
  }, { scope: footerRef });

  return (
    <footer id="contact" ref={footerRef} className="bg-black py-8 px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-xl mb-4">Connect with me</p>
        <ul className="flex justify-center space-x-6 mb-4">
          <li className="footer-link"><a href="https://x.com/samandeep0792" className="hover:text-blue-400">X</a></li>
          <li className="footer-link"><a href="https://github.com/samandeep007" className="hover:text-blue-400">GitHub</a></li>
          <li className="footer-link"><a href="https://linkedin.com/in/samandeep07" className="hover:text-blue-400">LinkedIn</a></li>
          <li className="footer-link"><a href="mailto:samandeep0792@gmail.com" className="hover:text-blue-400">Email</a></li>
        </ul>
        <p className="text-gray-500">© 2025 3S Universe</p>
      </div>
    </footer>
  );
};

export default Footer;